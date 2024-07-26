type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    incrementLength(): void {
        ++this.length;
    }

    decrementLength(): void {
        this.length && --this.length;
    }

    push(item: T): void {
        const newNode = { value: item } as Node<T>;
        this.incrementLength();
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    pop(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        const node = this.head as Node<T>;
        this.head = node.next;
        node.next = undefined;
        this.decrementLength();

        return node?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
