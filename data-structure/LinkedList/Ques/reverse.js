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
    reverse() {
        let next, prev = null, current = this.head;
        while (current !== null) {
            next = current.next; /**Pointing next to next link */
            current.next = prev; /**Making 1st node more like tail so here current will have **/
            prev = current;      /**value as 1st value and next will be null hence here assigning tail value to prev*/
            current = next;      /**Moving to next node and similarly we traverse prev till end and so prev becomes head and so reversed*/
        }
        return prev;
        /**In short what we are doing here is we are setting current element to next and current element to prev but
         * making next of prev point to prev and we are traversing this till end so last node of prev is last element value
         * and it's next is pointing to 2nd last element hence making prev as the reversed linked list
         */
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
k.reverse();