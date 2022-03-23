class MinHeap{
    constructor(){
        this.heap = [-Infinity];
    }
    insert(value){
        const heap = this.heap;
        heap[heap.length] = value;
        let node = heap.length-1;
        let prevNode = Math.floor(node/2);
        while(heap[prevNode] > heap[node]){
            [heap[prevNode], heap[node]] = [heap[node], heap[prevNode]];
            node = prevNode;
            prevNode = Math.floor(node/2);
        }return this;
    }
    removeMin(){
        const heap = this.heap;
        [heap[1], heap[heap.length-1]] = [heap[heap.length-1], heap[1]];
        const removed = heap.pop();
        let node = 1;
        let nodeLeft = 2;
        let nodeRight = 3;
        while (nodeRight < heap.length) {
            if (heap[nodeLeft] < heap[nodeRight]) {
                [heap[node], heap[nodeLeft]] = [heap[nodeLeft], heap[node]];
                node = nodeLeft;
            }else if (heap[nodeLeft] > heap[nodeRight]) {
                [heap[node], heap[nodeRight]] = [heap[nodeRight], heap[node]];
                node = nodeRight;
            }
            nodeLeft = 2 * node;
            nodeRight = nodeLeft + 1;
        }console.log(removed);
        return removed;
    }
}

const heap1 = new MinHeap();
heap1.insert(2).insert(9).insert(3).insert(8).insert(-1).insert(7).insert(5).insert(1).insert(20).insert(-2);
console.log(heap1.heap.slice(1));
heap1.removeMin();
console.log(heap1.heap.slice(1));
heap1.removeMin();
console.log(heap1.heap.slice(1));
heap1.removeMin();
console.log(heap1.heap.slice(1));
