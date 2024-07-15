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
        const newNode = new Node(item);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx >= this.length) return;
        const newNode = new Node(item);
        this.length++;
        if (idx === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        for (let i = 0; i < idx - 1; ++i) {
            current = current?.next;
        }
        newNode.next = current?.next;
        current.next = newNode;
    }
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
    get(idx: number): T | undefined {
        // if idx is bigger than legnth
        if (idx < 0 || idx >= this.length) return undefined;
        let current = this.head;
        for (let i = 0; i < idx; ++i) {
            current = current?.next;
        }
        return current?.value || undefined;
    }
    removeAt(idx: number): T | undefined {}
}
