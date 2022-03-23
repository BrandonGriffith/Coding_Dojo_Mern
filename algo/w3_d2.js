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
}
const heap1 = new MinHeap();
heap1.insert(2).insert(9).insert(3).insert(8).insert(-1).insert(7).insert(5);
console.log(heap1.heap.slice(1));
