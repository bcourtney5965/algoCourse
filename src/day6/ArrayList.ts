export default class ArrayList<T> {
    public length: number;
    private list: (T | undefined)[];

    constructor(size: number = 4) {
        this.length = 0;
        this.list = new Array(size).fill(undefined);
    }

    private increment(): void {
        this.length++;
    }

    private decrement(): void {
        this.length && --this.length;
    }

    prepend(item: T): void {}
    insertAt(item: T, idx: number): void {}
    append(item: T): void {
        if (this.length === this.list.length) {
            // double the length
            this.list = [
                ...this.list,
                ...new Array(this.length).fill(undefined),
            ];
        }
        this.list[this.length] = item;
        this.increment();
    }
    remove(item: T): T | undefined {
        return;
    }
    get(idx: number): T | undefined {
        let out: T | undefined = undefined;
        for (let i = 0; i < this.length; ++i) {
            if (idx === i) {
                out = this.list[i];
                break;
            }
        }
        return out;
    }
    removeAt(idx: number): T | undefined {
        return;
    }
}
