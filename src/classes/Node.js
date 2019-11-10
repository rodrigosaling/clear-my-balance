class Node {
  constructor(value, parentValue = 0) {
    this.value = value;
    this.result = value + parentValue;
    this.children = [];
  }

  addChild(value, parent) {
    const child = new Node(value, parent.result);
    this.children.push(child);
  }
}

export default Node;
