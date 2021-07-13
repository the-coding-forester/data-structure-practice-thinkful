/* eslint-disable no-console */
const LinkedList = require('./linkedList');

const linkedList = new LinkedList();

linkedList.insert('One');
linkedList.insert(2);

// You can use `find()` to update the value of a node in the list.
linkedList.find((node) => node.value === 'One').value = 1;

console.log(linkedList);

console.log(
  'find 2',
  linkedList.find((node) => node.value === 2),
);

console.log(
  'find 3',
  linkedList.find((node) => node.value === 3),
);
