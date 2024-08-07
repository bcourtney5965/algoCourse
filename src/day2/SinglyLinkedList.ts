class Node<T> {
    value: T;
    next: Node<T> | null;

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
    decrementLength(): void {
        this.length && this.length--;
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
        if (idx < 0 || idx > this.length) return;
        const newNode = new Node(item);
        this.length++;
        if (idx === 0) {
            newNode.next = this.head;
            this.head = newNode;
            if (this.length === 1) this.tail = newNode; // Update tail if list was empty
            return;
        }
        let current = this.head;
        for (let i = 0; i < idx - 1 && current; ++i) {
            current = current.next;
        }
        if (current !== null) {
            newNode.next = current.next;
            current.next = newNode;
            if (newNode.next === null) this.tail = newNode; // Update tail if appended at the end
        }
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
    remove(item: T): T | undefined {
        if (!this.head) return undefined;

        if (this.head.value === item) {
            this.head = this.head.next;
            this.decrementLength();
            if (this.length === 0) {
                this.tail === null;
            }
            return item;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.value === item) {
                current.next = current.next.next;
                this.decrementLength();
                if (current.next === null) {
                    this.tail = current;
                }
                return item;
            }
            current = current.next;
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;
        let current = this.head;
        for (let i = 0; i < idx && current; ++i) {
            current = current.next;
        }
        return current?.value || undefined;
    }
    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length || !this.head) return undefined;

        let output: T | undefined;

        if (idx === 0) {
            output = this.head.value;
            this.head = this.head.next;
        } else {
            let previous = this.head;
            for (let i = 0; i < idx - 1 && previous.next; i++) {
                previous = previous.next;
            }

            if (previous.next) {
                output = previous.next.value;
                previous.next = previous.next.next;

                if (idx === this.length - 1) {
                    this.tail = previous;
                }
            }
        }

        this.decrementLength();
        return output;
    }
}
