type Node<T> = {
    value: T;
    next: Node<T> | null;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    incrementLength(): void {
        ++this.length;
    }

    push(item: T): void {
        const newNode = { value: item, next: null } as Node<T>;
        this.incrementLength();
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    pop(): T | undefined {
        return;
    }
    peek(): T | undefined {
        return;
    }
}
