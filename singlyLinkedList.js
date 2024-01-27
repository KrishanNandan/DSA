class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      /**Since tail has been equated to head so when we are doing tail.next it is like head.next since object */
      /**so during 1st operation tail will have value of head but as we progress things start to get stored
       * in head.next then head.next.next and so on and tell use to have last value and next value as null
       */
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length = this.length + 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return current;
  }
}
const list = new singlyLinkList();
list.push(10);
list.push(20);
list.push(30);
console.log("krishan", list.pop());