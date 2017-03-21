import React from 'react';
import update from 'immutability-helper';
import _ from 'lodash';
import {initData, selectData} from './utils/Support';

class Tree extends React.Component {

  constructor(props) {
    super(props);
    this._handleFold = this._handleFold.bind(this);
    this._addRootNode = this._addRootNode.bind(this);
    this._addNode = this._addNode.bind(this);
    this.state = {
      nodeData: props.data
    };
  }

  _handleFold(e) {
    const target = e.target,
      ul = target.parentElement.lastElementChild;
    target.setAttribute('class', 'childList_up');

    const t = ul.animate([
      {opacity:1, easing: 'ease-out'},
      {opacity:0.1, easing: 'ease-in'},
      {opacity:0}
    ], {duration: 1000})
    t.addEventListener('finish', () => {
      ul.setAttribute('class', 'childList_none');
    });
  }

  _addRootNode() {
    if(this.state.nodeData === undefined) {
      this.setState({nodeData: [initData()]});
      return;
    }

    this.setState(update(this.state, {
      nodeData: {$push: [initData()]}
    }));
  }

  _addNode({target}) {
    const nodeData = _.cloneDeep(this.state.nodeData),
      index = target.closest('li').getAttribute('data-index').split('-'),
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
        <input type="text" className="edit" onChange={this.handleChange} value={title}/>
      </span>
    );
  }

  _renderButtonGroup(keys, type) {
    return (
      <div className="button_group">
        <button onClick={this._addNode} className="add_button">ADD</button>
        <button className="delete_button">DELETE</button>
        { /*<button className="edit_start">EDIT</button> */}
        <button className="edit_end">COMPLETE</button>
      </div>
    );
  }

  _renderNode(node, keys) {
    const hasChild = _.isEmpty(node.childNodes) ? 'childList_none' : 'childList_down';
    return (
      <li data-index={keys} key={keys}>
        <button className={hasChild} onClick={this._handleFold}>open</button>
        <div className="contentsBlock">
          {node.isEditable && this.props.isEditable ? this._renderButtonGroup(keys, 'CREATE') : undefined}
          <div className="text_area">
            {node.isEditMode ? this._renderEditField(node.title) : this._renderReadField(node.title)}
          </div>
        </div>
        {!_.isEmpty(node.childNodes) ? this._renderNodeContainer(node.childNodes, keys) : undefined}
      </li>
    );
  }

  _renderNodeContainer(nodes, depth) {
    return (
      <ul>
        {
          nodes.map((e, i) => {
            let keys = depth !== 'init' ? depth + '-' + i : i;
            return this._renderNode(e, keys);
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
          <li className="start_contents">
            <button onClick={this._addRootNode}><span className="add_button"></span>MARLIN TREE START</button>
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

export default Tree;
