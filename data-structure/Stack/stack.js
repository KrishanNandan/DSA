/**This data structure follow LIFO
*/
class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
    }
    push(val) {
        this.items.push(val);
        this.size++;
    }
    pop() {
        if (this.size === 0) return 'underflow';
        this.items.pop();
        this.size--;
    }
    peek() {
        return this.items[this.size - 1];
    }
    size() { return this.size; }
}