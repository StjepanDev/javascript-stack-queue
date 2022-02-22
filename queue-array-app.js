class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(val) {
    this.items.unshift(val);
  }

  dequeue() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toArray() {
    return this.items.slice();
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
