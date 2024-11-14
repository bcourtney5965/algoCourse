class Node<N> {
    value: N;
    next: Node<N> | null;

    constructor(value: N) {
        this.value = value;
        this.next = null;
    }
}

class Queue<T> {
    first: Node<T> | null;
    last: Node<T> | null;
    size: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // The enqueue method receives a value and adds it to the "end" of the queue
    enqueue(val: T) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else if (this.last) {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        var temp = this.first;
        if (this.first === this.last) {
            this.first = this.last = null;
        }
        if (this.first) {
            this.first = this.first.next;
            this.size--;
        }
        return temp.value;
    }
}

function breadthFirstSearch(head: BinaryNode<number>, needle: number) {}

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    // const nodes = new Queue<number | null>();
    // return breadthFirstSearch(head, needle, nodes);
    return breadthFirstSearch(head, needle);
}
