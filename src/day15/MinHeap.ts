export default class MinHeap {
  public length: number;
  public data: Array<number>;

  constructor() {
    this.data = [];
    this.length = 0;
  }

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private leftChild(idx: number): number {
    return idx * 2 + 1;
  }

  private rightChild(idx: number): number {
    return idx * 2 + 2;
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) return;

    const parentIdx = this.parent(idx);
    const parentValue = this.data[parentIdx];
    const currentValue = this.data[idx];

    if (parentValue > currentValue) {
      // Swap with parent
      this.data[idx] = parentValue;
      this.data[parentIdx] = currentValue;
      this.heapifyUp(parentIdx);
    }
  }

  private heapifyDown(idx: number): void {
    const leftIdx = this.leftChild(idx);
    const rightIdx = this.rightChild(idx);

    // If no children, stop
    if (idx >= this.length || leftIdx >= this.length) return;

    const currentValue = this.data[idx];
    const leftValue = this.data[leftIdx];
    const rightValue =
      this.data[rightIdx] !== undefined ? this.data[rightIdx] : Infinity;

    // Find the smallest value among current node and its children
    if (
      rightIdx < this.length &&
      rightValue < leftValue &&
      rightValue < currentValue
    ) {
      // Right child is smallest, swap with right
      this.data[idx] = rightValue;
      this.data[rightIdx] = currentValue;
      this.heapifyDown(rightIdx);
    } else if (leftValue < currentValue) {
      // Left child is smallest, swap with left
      this.data[idx] = leftValue;
      this.data[leftIdx] = currentValue;
      this.heapifyDown(leftIdx);
    }
  }

  insert(value: number): void {
    // Add value to the end of the heap
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete(): number {
    if (this.length === 0) return -1;

    const out = this.data[0];
    this.length--;

    if (this.length === 0) {
      this.data = [];
      return out;
    }

    // Move the last element to the root
    this.data[0] = this.data[this.length];
    // Remove the last element to avoid duplicates
    this.data.length = this.length;
    this.heapifyDown(0);

    return out;
  }
}
