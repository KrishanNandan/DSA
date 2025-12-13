/**This data structure follow FIFO
 * Simple implementation would be using array and shift for removing from front and push for adding at end but removing will 
 * o(n) so if we want linear then we use Object or map 
*/
class Queue {
    constructor() {
        this.items = {};
        this.firstIndx = 0;
        this.lastIndx = 0;
    }

    enqueue(val) {
        this.items[this.lastIndx] = val;
        this.lastIndx++;
    }

    dequeue() {
        if (this.firstIndx !== this.lastIndx) {
            const dequeuedValue = this.items[this.firstIndx];
            delete this.items[this.firstIndx];
            this.firstIndx++;
            return dequeuedValue;
        }

        if (this.firstIndx === this.lastIndx) {
            this.firstIndx = 0;
            this.lastIndx = 0;
        }
    }

    size() {
        return this.lastIndx - this.firstIndx;
    }

}