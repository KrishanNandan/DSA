class Node {
  constructor(value) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      const lastValue = { ...this.head };
      this.head = null;
      this.tail = null;
      return lastValue;
    }
    const prevValue = { ...this.tail.prev };
    const lastValue = { ...this.tail };
    this.tail = prevValue;
    this.tail.next = null;
    return prevValue;
  }
}
