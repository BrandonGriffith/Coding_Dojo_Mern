class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList(){
        let result = `LL.length = ${this.length} -- List start -- `;
        let current = this.head;
        while(current){
            result += `${current.value} ==> `;
            current = current.next;
        }console.log(result + "null");
        return result;
    }
    insert(index, value){
        if(index<1){this.prepend(value);return}
        if(index>this.length){this.append(value);return}
        const newNode = new Node(value);
        let current = this.head;
        for(let i=1;i<index;i++)current = current.next;
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return this;
    }
    delete(index){
        if(index===0){this.head=this.head.next;return}
        if(index>=this.length)return;
        let current = this.head;
        for(let i=1;i<index;i++)current = current.next;
        if(current.next===this.tail)this.tail=current;
        current.next = current.next.next;
        this.length--;
        return this;
    }
}
const LL = new LinkedList(10);
LL.append(5).append(16);
LL.prepend(12).prepend(11);
LL.insert(2,99);
LL.delete(5);
console.log(LL);
LL.printList();
