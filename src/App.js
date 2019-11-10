import React from 'react';
// import CytoscapeComponent from 'react-cytoscapejs/src/component';
import Tree from './classes/Tree';
import './App.css';

const endValue = 0;
const startValue = 2;
const addValues = [2, 4];
const subtractValues = [8, 10];
// const startValue = 1.4;
// const addValues = [6.4, 11.6, 57.6, 115.2, 172.8];
// const subtractValues = [5, 6.4, 11.6];
const goBelowZero = false;
const maxLevels = 4;

// let currentLevel = 1;
// const hasFinished = false;

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

const path = [];
let hasFoundPath = false;

// eslint-disable-next-line consistent-return
const walkTree = node => {
  if (node.result === endValue) {
    hasFoundPath = true;
    return node;
  }

  if (hasFoundPath) {
    return node;
  }

  if (!node.children.length) {
    // console.log('dead end');
    return false;
  }

  node.children.forEach(child => {
    const response = walkTree(child);
    // console.log(successPath);
    // if (response === false) {
    //   return successPath.pop();
    // }
    if (response) {
      // we found the complete path
      path.unshift(response);
    }
    return response;
  });
};

function App() {
  const tree = new Tree(startValue);

  addChildren(tree.root);

  console.log(tree);

  walkTree(tree.root, path);

  console.log('hasFoundPath', hasFoundPath);
  console.log(path);

  console.log('ended!');

  // const elements = [
  //   // list of graph elements to start with
  //   {
  //     data: { id: 'a' },
  //   },
  //   {
  //     data: { id: 'b' },
  //   },
  //   {
  //     data: { id: 'c' },
  //   },
  //   {
  //     data: { id: 'ab', source: 'a', target: 'b' },
  //   },
  //   {
  //     data: { id: 'ac', source: 'a', target: 'c' },
  //   },
  // ];
  //
  // const style = [
  //   // the stylesheet for the graph
  //   {
  //     selector: 'node',
  //     style: {
  //       'background-color': '#666',
  //       label: 'data(id)',
  //     },
  //   },
  //
  //   {
  //     selector: 'edge',
  //     style: {
  //       width: 3,
  //       'line-color': '#ccc',
  //       'target-arrow-color': '#ccc',
  //       'target-arrow-shape': 'triangle',
  //     },
  //   },
  // ];
  //
  // const layout = {
  //   name: 'breadthfirst',
  // };

  return (
    <div className="App">
      <h1>Clear my Balance</h1>
      {/* <CytoscapeComponent */}
      {/*  elements={elements} */}
      {/*  stylesheet={style} */}
      {/*  layout={layout} */}
      {/*  style={{ width: '600px', height: '600px', background: '#eeeeee' }} */}
      {/* /> */};
    </div>
  );
}

export default App;
