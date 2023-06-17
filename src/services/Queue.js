class OrderQueue {

    constructor() {
      this.orders = {};
      this.head = 0;
      this.tail = 0;
    }

    enqueue(order) {
      this.orders[this.tail] = element;
      this.tail++;
    }

    dequeue() {
      const item = this.orders[this.head];
      delete this.orders[this.head];
      this.head++;
      return item;
    }

    peek() {
      return this.orders[this.head];
    }

    get length() {
      return this.tail - this.head;
    }
    
    get isEmpty() {
      return this.length === 0;
    }
  }