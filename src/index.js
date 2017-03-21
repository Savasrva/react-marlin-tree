import React from 'react';
import ReactDOM from 'react-dom';
import style from 'style.css';
import Tree from './Tree';

const rootElement = document.getElementById('tree-wrapper');

const data = [
  {
    title: 'Hero',
    isEditable: false,
    order: 0,
    childNodes: [
      {
        title: 'Marvel',
        isEditable: true,
        order: 0,
        childNodes: [
          {
            title: 'Captain America',
            isEditable: false,
            order: 0
          },
          {
            title: 'Iron man',
            isEditable: true,
            order: 1
          },
          {
            title: 'Hulk',
            isEditable: false,
            order: 2
          }
        ]
      },
      {
        title: 'DC',
        isEditable: true,
        order: 1,
        childNodes: [
          {
            title: 'SuperMan',
            isEditable: false,
            order: 0
          },
          {
            title: 'BatMan',
            isEditable: false,
            order: 1
          }
        ]
      }
    ]
  }
];

ReactDOM.render(
  <Tree
    data={data}
    onSubmit={data => alert(data)}
    isEditable={true}
  />,
  rootElement
);
