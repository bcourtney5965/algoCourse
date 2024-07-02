class Node<T> {
    value: T;
    next?: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head: Node<T> | null;
    private tail: Node<T> | null;

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    prepend(item: T): void {
        // if head & tail are null
        //     point them to item
        //     return
        // point T.next to head
        // point head to T
    }
    insertAt(item: T, idx: number): void {}
    append(item: T): void {
        const newNode = new Node(item);
        this.length++;

        if (!this.head) {
            // If the list is empty, set both head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If the list is not empty, add the new node to the end
            if (this.tail) {
                this.tail.next = newNode;
            }
            this.tail = newNode;
        }
    }
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}
