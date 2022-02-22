import { LinkedList } from './linked-list.js';

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(val) {
    this.list.append(val);
  }

  dequeue(val) {
    return this.list.deleteHead();
  }

  isEmpty() {
    return !this.list.head;
  }
}

const queue = new Queue();

queue.enqueue('atfc');
queue.enqueue('defected');
queue.enqueue('hrv');

console.log(queue.toArray());

console.log(queue.dequeue());

console.log(queue.toArray());

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.toArray());
