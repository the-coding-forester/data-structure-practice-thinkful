/* eslint-disable no-console */
const LinkedList = require('./linkedList');

const linkedList = new LinkedList();

linkedList.insert('One');
linkedList.insert(2);

// You can use `find()` to update the value of a node in the list.
// linkedList.find((node) => node.value === 'One').value = 1;

linkedList.insert(1.5, (node) => node.value === 'One');

console.log(linkedList);
