class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.size = 0;
  }
  add(val) {
    const newNode = new Node(val);
    if (this.head) {
      this.tail.next = newNode; /**Here we are linking the new node to the list */
      this.tail = newNode; /**Here Updating the 'tail' pointer itself */
    }
    else {
      this.head = newNode;
      this.tail = this.head; /** It can be equal to newNode as well and that won't make a difference*/
    }
    this.size++;
  }
  get Middle() {
    const midIndex = Math.floor(this.size / 2);
    let length = 0;
    let midVal = this.head;
    while (length !== midIndex) {
      midVal = midVal.next;
      length++;
    }
    return midVal.value;
  }
}

const k = new LinkedList();
k.add(10);
k.add(50);
k.add(80);
k.add(20);
k.add(90);
k.add(70);
k.add(30);
k.add(85);
