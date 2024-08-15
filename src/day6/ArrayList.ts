export default class ArrayList<T> {
    public length: number;
    private list: T[];

    constructor() {
        this.length = 0;
        this.list = [];
    }

    increment(): void {
        this.length++;
    }

    decrement(): void {
        this.length && --this.length;
    }

    prepend(item: T): void {}
    insertAt(item: T, idx: number): void {}
    append(item: T): void {}
    remove(item: T): T | undefined {
        return;
    }
    get(idx: number): T | undefined {
        return;
    }
    removeAt(idx: number): T | undefined {
        return;
    }
}
