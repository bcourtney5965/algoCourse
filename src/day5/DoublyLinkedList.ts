type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    increment(): void {
        ++this.length;
    }

    decrement(): void {
        this.length && --this.length;
    }

    prepend(item: T): void {}
    insertAt(item: T, idx: number): void {}
    append(item: T): void {
        const node = { value: item } as Node<T>;
        this.increment();
        if (this.head && this.tail) {
            const tail = this.tail;
            tail.next = node;
            node.prev = tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
    }
    remove(item: T): T | undefined {
        return;
    }
    get(idx: number): T | undefined {
        if (!this.head || idx + 1 > this.length) return undefined;

        let current: Node<T> | undefined = this.head;
        let counter: number = 0;

        while (current) {
            if (counter === idx) {
                return current.value;
            }
            current = current.next;
            ++counter;
        }
        return undefined;
    }
    removeAt(idx: number): T | undefined {
        return;
    }
}
