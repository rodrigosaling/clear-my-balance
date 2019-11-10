import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs/src/component';
import Tree from './classes/Tree';
import './App.css';

const endValue = 0;
const startValue = 2;
const addValues = [2, 4];
const subtractValues = [8, 10];
const goBelowZero = false;
const maxLevels = 10;
// let currentLevel = 1;
// const hasFinished = false;

// class Node {
//   constructor(value, parentValue = 0) {
//     this.value = value;
//     this.result = value + parentValue;
//     this.children = [];
//   }
//
//   addChild(value, parent) {
//     const child = new Node(value, parent.result);
//     this.children.push(child);
//   }
// }
//
// class Tree {
//   constructor(value) {
//     const node = new Node(value);
//     this.root = node;
//   }
// }

const addChildren = (parent, level = 1) => {
  if (
    level >= maxLevels ||
    (!goBelowZero && parent.result < 0) ||
    parent.result === endValue
  ) {
    return;
  }

  addValues.forEach(value => {
    parent.addChild(value, parent);
  });

  subtractValues.forEach(value => {
    parent.addChild(-value, parent);
  });

  parent.children.forEach(child => {
    return addChildren(child, level + 1);
  });
};

function App() {
  const tree = new Tree(startValue);

  addChildren(tree.root);

  // console.log(tree);

  // console.log('ended!');

  const elements = [
    // list of graph elements to start with
    {
      // node a
      data: { id: 'a' },
    },
    {
      // node b
      data: { id: 'b' },
    },
    {
      // edge ab
      data: { id: 'ab', source: 'a', target: 'b' },
    },
  ];

  const style = [
    // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        label: 'data(id)',
      },
    },

    {
      selector: 'edge',
      style: {
        width: 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle',
      },
    },
  ];

  const layout = {
    name: 'grid',
    rows: 1,
  };

  return (
    <div className="App">
      <h1>Clear my Balance</h1>
      <CytoscapeComponent
        elements={elements}
        stylesheet={style}
        layout={layout}
        style={{ width: '600px', height: '600px', background: '#eeeeee' }}
      />
      ;
    </div>
  );
}

export default App;
