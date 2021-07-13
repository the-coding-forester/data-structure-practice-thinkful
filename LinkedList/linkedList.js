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

  insert(value, isMatch = (node, index) => index === this.length - 1) {
    if (this.head) {
      const previousNode = this.find(isMatch);

      if (!previousNode) {
        throw new Error('No match found.');
      }

      previousNode.next = new Node(value, previousNode.next);
    } else {
      this.insertAtHead(value);
    }
    return this;
  }

  find(isMatch) {
    return this.findWithPrevious(isMatch)[0];
  }

  findWithPrevious(isMatch) {
    let index = 0;
    let previous = null;
    let node = this.head;
    while (node) {
      if (isMatch(node, index)) {
        return [node, previous];
      }
      index++;
      previous = node;
      node = node.next;
    }
    return [null, null];
  }
}

module.exports = LinkedList;
