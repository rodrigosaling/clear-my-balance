import Node from './Node';

class Tree {
  constructor(value) {
    this.root = new Node(value);
    this.globalId = 1;
  }
}

export default Tree;
