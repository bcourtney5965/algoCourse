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

    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next;
        }
        return curr;
    }
    private removeNode(node: Node<T>): T | undefined {
        if (!this.head || !this.tail) return undefined;

        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }
        this.decrement();
        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (this.head === node) {
            this.head = node.next;
        }

        if (this.tail === node) {
            this.tail = node.prev;
        }

        node.prev = node.next = undefined;
        return node.value;
    }

    increment(): void {
        ++this.length;
    }

    decrement(): void {
        this.length && --this.length;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.increment();

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error("Incorrect idx");
        }
        const node = { value: item } as Node<T>;
        if (!this.head) {
            this.head = this.tail = node;
        } else if (idx === 0) {
            this.prepend(item);
        } else if (idx === this.length && this.tail) {
            this.append(item);
        } else {
            let current = this.getAt(idx) as Node<T>;
            const node = { value: item } as Node<T>;

            current = current as Node<T>;
            node.next = current;
            node.prev = current.prev;
            current.prev = node;
            if (node.prev) {
                node.prev.next = current;
            }
        }
        this.increment();
    }
    append(item: T): void {
        const node = { value: item } as Node<T>;
        this.increment();
        if (this.head && this.tail) {
            const tail = this.tail;
            tail.next = node;
            node.prev = tail;
            this.tail = node;
            return;
        } else {
            this.head = this.tail = node;
            return;
        }
    }
    remove(item: T): T | undefined {
        if (!this.head || !this.tail) return undefined;

        let current: Node<T> | undefined = this.head;
        for (let i = 0; current && i < this.length; ++i) {
            if (current.value === item) {
                break;
            }
            current = current.next;
        }
        if (!current) return undefined;

        return this.removeNode(current);
    }
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }
    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);
        if (!node) {
            return undefined;
        }
        return this.removeNode(node);
    }
}
