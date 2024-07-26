type Node<T> = {
    value: number;
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

    push(item: T): void {}
    pop(): T | undefined {
        return;
    }
    peek(): T | undefined {
        return;
    }
}
