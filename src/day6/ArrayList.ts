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

    prepend(item: T): void {
        if (this.length === this.list.length) {
            this.list = [
                ...this.list,
                ...new Array(this.length).fill(undefined),
            ];
            this.length = this.length * 2;
        }
        for (let i = this.length; i > 0; --i) {
            this.list[i] = this.list[i - 1];
        }
        this.list[0] = item;
        this.increment();
    }
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
        let out: T | undefined = undefined;
        let idx: number | undefined;
        // find item
        for (let i = 0; i <= this.length; ++i) {
            if (this.list[i] === item) {
                out = this.list[i];
                this.list[i] === undefined;
                idx = i;
                break;
            }
        }
        // reorder ArrayList
        for (let i = idx; typeof i === "number" && i < this.length - 1; ++i) {
            this.list[i] = this.list[i + 1];
        }
        out && this.decrement();
        return out;
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
        if (idx < 0 || idx >= this.length) throw new Error("Invalid id");

        const out: T | undefined = this.list[idx] || undefined;
        this.list[idx] = undefined;
        for (let i = idx; i < this.length - 1; ++i) {
            this.list[i] = this.list[i + 1];
        }
        this.decrement();
        this.list[this.length] = undefined;
        return out;
    }
}
