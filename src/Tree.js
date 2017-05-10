import React from 'react';
import update from 'immutability-helper';
import _ from 'lodash';
import {initData, selectData, deleteData, closest} from './utils/Support';
import style from 'style.css';

export default class Tree extends React.Component {

  constructor(props) {
    super(props);
    this._defaultData = this._defaultData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteNode = this.handleDeleteNode.bind(this);
    this.handleToggleLock = this.handleToggleLock.bind(this);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggleFold = this.handleToggleFold.bind(this);
    this.handleAddRootNode = this.handleAddRootNode.bind(this);
    this.handleAddNode = this.handleAddNode.bind(this);
    this.state = {
      nodeData : props.data
    };
  }

  _defaultData({target, selectedNode = false}) {
    let defaultHandleData = {
      nodeData : _.cloneDeep(this.state.nodeData),
      index : closest(target, 'li').getAttribute('data-index').split('-')
    };

    if(selectedNode) {
      defaultHandleData['selectedNode'] = selectData(defaultHandleData.nodeData, defaultHandleData.index);
    }

    return defaultHandleData;
  }

  handleSubmit() {
    this.props.onSubmit(JSON.stringify(this.state.nodeData));
  }

  handleDeleteNode({target}) {
    const {nodeData, index} = this._defaultData({target: target, selectedNode: false});

    deleteData(nodeData, index);

    this.setState({nodeData : nodeData});
  }

  handleToggleLock({target}) {
    const {nodeData, index, selectedNode} = this._defaultData({target: target, selectedNode: true});

    selectedNode.isLocked = !selectedNode.isLocked;

    this.setState({nodeData : nodeData});
  }

  handleToggleEdit({target}) {
    const {nodeData, index, selectedNode} = this._defaultData({target: target, selectedNode: true});

    selectedNode.isEditMode = !selectedNode.isEditMode;

    this.setState({nodeData : nodeData});
  }

  handleChange({target}) {
    const {nodeData, index, selectedNode} = this._defaultData({target: target, selectedNode: true});

    selectedNode.title = target.value;

    this.setState({nodeData : nodeData});
  }

  handleToggleFold({target}) {
    const ul = target.parentElement.lastElementChild;
    target.className = target.className === 'button_list_unfold' ? 'button_list_fold' : 'button_list_unfold';

    if(target.className === 'button_list_unfold') {
      ul.className = 'button_list_none';
    } else {
      ul.className = '';
    }
  }

  handleAddRootNode() {
    if(this.state.nodeData === undefined) {
      this.setState({nodeData: [initData()]});
      return;
    }

    this.setState(update(this.state, {
      nodeData: {$push: [initData()]}
    }));
  }

  handleAddNode({target}) {
    const {nodeData, index, selectedNode} = this._defaultData({target: target, selectedNode: true});

    if(selectedNode.childNodes) {
      selectedNode.childNodes.push(initData());
    } else {
      selectedNode.childNodes = [initData()];
    }

    this.setState({nodeData : nodeData});
  }

  renderReadField(title) {
    return (
      <span className="read_area">
        {title}
      </span>
    );
  }

  renderEditField(title) {
    return (
      <span className="input_area">
        <input type="text" className="edit" onChange={this.handleChange} value={title}/>
      </span>
    );
  }

  renderDefaultBtns() {
    return (
      <div className="button_group">
        <button onClick={this.handleAddNode} type="button" className="button_add">ADD</button>
        <button onClick={this.handleToggleLock} type="button" className="button_lock">LOCK</button>
        <button onClick={this.handleToggleEdit} type="button" className="button_edit_off">EDIT</button>
        <button onClick={this.handleDeleteNode} type="button" className="button_delete">DELETE</button>
      </div>
    );
  }

  renderEditBtns() {
    return (
      <div className="button_group">
        <button onClick={this.handleToggleEdit} type="button" className="button_edit_on">COMPLETE</button>
        <button onClick={this.handleDeleteNode} type="button" className="button_delete">DELETE</button>
      </div>
    );
  }

  renderLockBtns() {
    return (
      <div className="button_group">
        <button onClick={this.handleToggleLock} type="button" className="button_unlock">UNLOCK</button>
      </div>
    )
  }

  renderButtonGroup(isParentLocked, isLocked, isEditMode = false) {
    if(isParentLocked) {
      return undefined;
    } else if(isLocked) {
      return this.renderLockBtns();
    } else if(isEditMode) {
      return this.renderEditBtns();
    } else {
      return this.renderDefaultBtns();
    }
  }

  renderNode(node, keys, isParentLocked = false) {
    const hasChild = _.isEmpty(node.childNodes) ? 'button_list_none' : 'button_list_fold',
      willChildLock = isParentLocked ? isParentLocked : node.isLocked;
    return (
      <li data-index={keys} key={keys}>
        <button type="button" className={hasChild} onClick={this.handleToggleFold}>open</button>
        <div className="contents_tree">
          {this.props.isEditable ? this.renderButtonGroup(isParentLocked, node.isLocked, node.isEditMode) : undefined}
          <div className="text_area">
            {node.isEditMode ? this.renderEditField(node.title) : this.renderReadField(node.title)}
          </div>
        </div>
        {!_.isEmpty(node.childNodes) ? this.renderNodeContainer(node.childNodes, keys, willChildLock) : undefined}
      </li>
    );
  }

  renderNodeContainer(nodes, depth , isParentLocked = false) {
    return (
      <ul>
        {
          nodes.map((e, i) => {
            const keys = depth !== 'init' ? depth + '-' + i : i;
            return this.renderNode(e, keys, isParentLocked);
          })
        }
      </ul>
    );
  }

  renderAddRootArea() {
    return (
      <div className="start_back">
        <ul>
          <li><p><strong>MARLIN TREE</strong></p></li>
          <li className="contents_start">
            <button onClick={this.handleAddRootNode} type="button">MARLIN TREE START</button>
            <button onClick={this.handleSubmit} type="submit">SUBMIT</button>
          </li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div id="marlinTreeView">
        {this.props.isEditable ? this.renderAddRootArea() : undefined}
        <div className="contents_wrap">
          {this.renderNodeContainer(this.state.nodeData, 'init')}
        </div>
      </div>
    );
  }
}
