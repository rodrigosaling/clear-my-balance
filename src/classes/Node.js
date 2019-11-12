class Node {
  constructor(value, parent = {}) {
    const { value: pValue, result: pResult, parent: pParent } = parent;
    this.value = value;
    this.result = value + (pResult || 0);
    this.parent = { value: pValue, result: pResult, parent: pParent };
    this.children = [];
  }

  addChild(value, parent) {
    const child = new Node(value, parent);
    this.children.push(child);
  }
}

export default Node;
