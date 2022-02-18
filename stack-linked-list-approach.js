import { LinkedList } from './linked-list.js';

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(val) {
    this.list.prepend(val);
  }

  pop() {
    return this.list.deleteHead();
  }

  isEmpty() {
    return !this.list.head;
  }

  toArray() {
    return this.list.toArray();
  }
}

const stack = new Stack();
stack.push('cook dinner');
stack.push('go outside');
stack.push('buy beer');

console.log(stack.toArray());

console.log(stack.pop());

console.log(stack.toArray());

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.toArray());
