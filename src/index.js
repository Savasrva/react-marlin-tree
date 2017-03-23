import React from 'react';
import ReactDOM from 'react-dom';
import Tree from './Tree';

const rootElement = document.getElementById('tree-wrapper');

const data = [
  {
    title: 'Hero',
    isLocked: false,
    order: 0,
    childNodes: [
      {
        title: 'Marvel',
        isLocked: false,
        order: 0,
        childNodes: [
          {
            title: 'Captain America',
            isLocked: true,
            order: 0
          },
          {
            title: 'Iron man',
            isLocked: false,
            order: 1
          },
          {
            title: 'Hulk',
            isLocked: true,
            order: 2
          }
        ]
      },
      {
        title: 'DC',
        isLocked: true,
        order: 1,
        childNodes: [
          {
            title: 'SuperMan',
            isLocked: true,
            order: 0
          },
          {
            title: 'BatMan',
            isLocked: false,
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
