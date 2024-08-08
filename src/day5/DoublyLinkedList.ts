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

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.increment();

        if (!this.head) {
            this.head = this.tail = node;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
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
        if (!this.head || !this.tail) return undefined;

        let current: Node<T> | undefined = this.head;
        while (current) {
            if (current.value === item) {
                const next = current.next;
                const prev = current.prev;

                if (next) {
                    next.prev = prev;
                } else {
                    this.tail = prev;
                }

                if (prev) {
                    prev.next = next;
                } else {
                    this.head = next;
                }

                current.prev = current.next = undefined;

                this.decrement();
                return item;
            }
            current = current.next;
        }

        return undefined;
    }
    get(idx: number): T | undefined {
        if (!this.head || idx + 1 > this.length) return undefined;

        const increment: boolean = idx < this.length / 2;
        let current: Node<T> | undefined = increment ? this.head : this.tail;
        let position: number = increment ? 0 : this.length - 1;

        while (current) {
            if (position === idx) {
                return current.value;
            }
            current = increment ? current.next : current.prev;
            increment ? ++position : --position;
        }
        return undefined;
    }
    removeAt(idx: number): T | undefined {
        if (!this.head || idx + 1 > this.length) return;

        let current: Node<T> | undefined = this.head;
        let position: number = 0;
        let output: T | undefined = undefined;
        let node: Node<T> | undefined;

        while (current) {
            if (idx === position) {
                node = current;
                let prev: Node<T> | undefined;
                let next: Node<T> | undefined;
                // for head
                if (idx === 0 && node.next) {
                    next = node.next;
                    next.prev = undefined;
                    this.head = next;
                    output = node.value;
                    // for tail
                } else if (idx === this.length - 1 && node.prev) {
                    prev = node.prev;
                    prev.next = undefined;
                    this.tail = prev;
                    output = node.value;
                    // for final intem
                } else if (this.head === this.tail && this.length === 1) {
                    output = node.value;
                    this.head = this.tail = undefined;
                    // for  middle
                } else if (idx >= 0 && idx < this.length) {
                    prev = node.prev;
                    next = node.next;
                    if (prev) {
                        prev.next = next;
                    }
                    if (next) {
                        next.prev = prev;
                    }
                    output = node.value;
                }
                this.decrement();
                break;
            }

            current = current.next;
            ++position;
        }

        node = undefined;
        return output;
    }
}
