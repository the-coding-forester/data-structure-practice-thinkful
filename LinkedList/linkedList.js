// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  get length() {
    let result = 0;
    let node = this.head;

    while (node) {
      result += 1;
      node = node.next;
    }
    return result;
  }

  insertAtHead(value) {
    this.head = new Node(value, this.head);
    return this;
  }
}

module.exports = LinkedList;
