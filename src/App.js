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
const maxLevels = 5;

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

const foundNodes = [];

// eslint-disable-next-line consistent-return
const walkTree = node => {
  if (node.result === endValue) {
    foundNodes.push(node);
  }

  node.children.forEach(child => {
    walkTree(child);
  });
};

// eslint-disable-next-line consistent-return
const walkParents = node => {
  if (!node.parent) {
    return undefined;
  }

  console.log(node.parent.value);

  walkParents(node.parent);
};

const printPaths = nodes => {
  nodes.forEach(node => {
    walkParents(node);
  });
};

function App() {
  const tree = new Tree(startValue);

  addChildren(tree.root);

  console.log(tree);

  walkTree(tree.root);

  console.log('foundNodes', foundNodes);

  console.log('ended!');

  printPaths(foundNodes);

  return (
    <div className="App">
      <h1>Clear my Balance</h1>
      <p>Paths found:</p>
    </div>
  );
}

export default App;
