export default class MinHeap {
  public length: number;
  public heap: Array<number>;

  constructor() {
    this.heap = [];
    this.length = 0;
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private incrementLength(): void {
    this.length++;
  }

  insert(value: number): void {
    // push it onto the back
    this.heap.push(value);
    this.incrementLength();

    // initiate variables
    let valIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(valIndex);

    // while it's smaller than its parent
    while (value < this.heap[parentIndex]) {
      //      swap with parent
      [this.heap[valIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[valIndex],
      ];

      // update valIndex ref's
      valIndex = parentIndex;
      parentIndex = this.getParentIndex(valIndex);
      if (parentIndex < 0 || valIndex < 0) break;
    }
    return;
  }
  delete(): number {}
}
