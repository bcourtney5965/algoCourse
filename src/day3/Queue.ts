class Item<T> {
    public value: T;
    public next: Item<T> | null;

    constructor(value: T, next: Item<T> | null = null) {
        this.value = value;
        this.next = next;
    }
}

export default class Queue<T> {
    public length: number;
    public head: Item<T> | null;
    public tail: Item<T> | null;

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    decrementLength() {
        this.length && --this.length;
    }

    incrementLength() {
        ++this.length;
    }

    enqueue(item: T): void {
        const newItem = new Item(item);
        if (this.tail === null) {
            this.head = newItem;
            this.tail = newItem;
        } else if (this.tail !== null) {
            this.tail.next = newItem;
            this.tail = newItem;
        }
        this.incrementLength();
    }
    deque(): T | undefined {
        return undefined;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
