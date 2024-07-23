type Item<T> = {
    value: T;
    next?: Item<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Item<T>;
    private tail?: Item<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    decrementLength() {
        this.length && --this.length;
    }

    incrementLength() {
        ++this.length;
    }

    enqueue(item: T): void {
        const newItem: Item<T> = { value: item };
        this.incrementLength();
        if (!this.tail) {
            this.head = this.tail = newItem;
            return;
        }
        this.tail.next = newItem;
        this.tail = newItem;
    }
    deque(): T | undefined {
        return undefined;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
