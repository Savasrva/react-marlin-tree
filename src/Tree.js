import React from 'react';
import update from 'immutability-helper';
import _ from 'lodash';
import {initData, selectData, deleteData, closest} from './utils/Support';
import style from 'style.css';

export default class Tree extends React.Component {

  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleDeleteNode = this._handleDeleteNode.bind(this);
    this._handleToggleLock = this._handleToggleLock.bind(this);
    this._handleToggleEdit = this._handleToggleEdit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleToggleFold = this._handleToggleFold.bind(this);
    this._handleAddRootNode = this._handleAddRootNode.bind(this);
    this._handleAddNode = this._handleAddNode.bind(this);
    this.state = {
      nodeData: props.data
    };
  }

  _handleSubmit() {
    this.props.onSubmit(JSON.stringify(this.state.nodeData));
  }

  _handleDeleteNode({target}) {
    const nodeData = _.cloneDeep(this.state.nodeData),
      index = closest(target, 'li').getAttribute('data-index').split('-');

    deleteData(nodeData, index);

    this.setState({nodeData : nodeData});
  }

  _handleToggleLock({target}) {
    const nodeData = _.cloneDeep(this.state.nodeData),
      index = closest(target, 'li').getAttribute('data-index').split('-'),
      selectedNode = selectData(nodeData, index);

    selectedNode.isLocked = !selectedNode.isLocked;

    this.setState({nodeData : nodeData});
  }

  _handleToggleEdit({target}) {
    const nodeData = _.cloneDeep(this.state.nodeData),
      index = closest(target, 'li').getAttribute('data-index').split('-'),
      selectedNode = selectData(nodeData, index);

    selectedNode.isEditMode = !selectedNode.isEditMode;

    this.setState({nodeData : nodeData});
  }

  _handleChange({target}) {
    const nodeData = _.cloneDeep(this.state.nodeData),
      index = closest(target, 'li').getAttribute('data-index').split('-'),
      selectedNode = selectData(nodeData, index);

    selectedNode.title = target.value;

    this.setState({nodeData : nodeData});
  }

  _handleToggleFold({target}) {
    const ul = target.parentElement.lastElementChild;
    target.className = target.className === 'button_list_unfold' ? 'button_list_fold' : 'button_list_unfold';

    if(target.className === 'button_list_unfold') {
      ul.className = 'button_list_none';
    } else {
      ul.className = '';
    }
  }

  _handleAddRootNode() {
    if(this.state.nodeData === undefined) {
      this.setState({nodeData: [initData()]});
      return;
    }

    this.setState(update(this.state, {
      nodeData: {$push: [initData()]}
    }));
  }

  _handleAddNode({target}) {
    const nodeData = _.cloneDeep(this.state.nodeData),
      index = closest(target, 'li').getAttribute('data-index').split('-'),
      selectedNode = selectData(nodeData, index);

    if(selectedNode.childNodes) {
      selectedNode.childNodes.push(initData());
    } else {
      selectedNode.childNodes = [initData()];
    }

    this.setState({nodeData : nodeData});
  }

  _renderReadField(title) {
    return (
      <span className="read_area">
        {title}
      </span>
    );
  }

  _renderEditField(title) {
    return (
      <span className="input_area">
        <input type="text" className="edit" onChange={this._handleChange} value={title}/>
      </span>
    );
  }

  _renderDefaultBtns() {
    return (
      <div className="button_group">
        <button onClick={this._handleAddNode} type="button" className="button_add">ADD</button>
        <button onClick={this._handleToggleLock} type="button" className="button_lock">LOCK</button>
        <button onClick={this._handleToggleEdit} type="button" className="button_edit_off">EDIT</button>
        <button onClick={this._handleDeleteNode} type="button" className="button_delete">DELETE</button>
      </div>
    );
  }

  _renderEditBtns() {
    return (
      <div className="button_group">
        <button onClick={this._handleToggleEdit} type="button" className="button_edit_on">COMPLETE</button>
        <button onClick={this._handleDeleteNode} type="button" className="button_delete">DELETE</button>
      </div>
    );
  }

  _renderLockBtns() {
    return (
      <div className="button_group">
        <button onClick={this._handleToggleLock} type="button" className="button_unlock">UNLOCK</button>
      </div>
    )
  }

  _renderButtonGroup(isParentLocked, isLocked, isEditMode = false) {
    if(isParentLocked) {
      return undefined;
    } else if(isLocked) {
      return this._renderLockBtns();
    } else if(isEditMode) {
      return this._renderEditBtns();
    } else {
      return this._renderDefaultBtns();
    }
  }

  _renderNode(node, keys, isParentLocked = false) {
    const hasChild = _.isEmpty(node.childNodes) ? 'button_list_none' : 'button_list_fold',
      willChildLock = isParentLocked ? isParentLocked : node.isLocked;
    return (
      <li data-index={keys} key={keys}>
        <button type="button" className={hasChild} onClick={this._handleToggleFold}>open</button>
        <div className="contents_tree">
          {this.props.isEditable ? this._renderButtonGroup(isParentLocked, node.isLocked, node.isEditMode) : undefined}
          <div className="text_area">
            {node.isEditMode ? this._renderEditField(node.title) : this._renderReadField(node.title)}
          </div>
        </div>
        {!_.isEmpty(node.childNodes) ? this._renderNodeContainer(node.childNodes, keys, willChildLock) : undefined}
      </li>
    );
  }

  _renderNodeContainer(nodes, depth , isParentLocked = false) {
    return (
      <ul>
        {
          nodes.map((e, i) => {
            const keys = depth !== 'init' ? depth + '-' + i : i;
            return this._renderNode(e, keys, isParentLocked);
          })
        }
      </ul>
    );
  }

  _renderAddRootArea() {
    return (
      <div className="start_back">
        <ul>
          <li><p><strong>MARLIN TREE</strong></p></li>
          <li className="contents_start">
            <button onClick={this._handleAddRootNode} type="button">MARLIN TREE START</button>
            <button onClick={this._handleSubmit} type="submit">SUBMIT</button>
          </li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div id="marlinTreeView">
        {this.props.isEditable ? this._renderAddRootArea() : undefined}
        <div className="contents_wrap">
          {this._renderNodeContainer(this.state.nodeData, 'init')}
        </div>
      </div>
    );
  }
}
