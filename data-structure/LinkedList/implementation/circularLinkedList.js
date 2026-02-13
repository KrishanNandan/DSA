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
            // Circularity: points to itself when alone
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;/**This tells the newly created node to look back at the current end of the list. This is the correct way to "link" the new node into the chain */
            this.tail = newNode;
            // Circularity: link tail back to head
            this.tail.next = this.head;
            this.head.prev = this.tail;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        const lastNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = lastNode.prev;
            // Maintain the circle
            this.tail.next = this.head;
            this.head.prev = this.tail;

            // Clean up the removed node's references
            lastNode.next = null;
            lastNode.prev = null;
        }
        this.length--;
        return lastNode;
    }
}
