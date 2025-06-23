type Node<T> = {
  value: T;
  prev?: Node<T>;
  next?: Node<T>;
};

export default class DoublyLinkedList<T> {
  public length: number;
  public head?: Node<T>;
  public tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  private increment(): void {
    this.length++;
  }

  private decrement(): void {
    this.length && this.length--;
  }

  prepend(item: T): void {
    const node = { value: item } as Node<T>;

    // increment length
    this.increment();

    // add item
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    return;
  }

  insertAt(item: T, idx: number): void {
    // if idx > length
    if (idx > this.length) {
      throw Error("idx doesn't exist");
    }
    // if idx === length
    if (idx === length) {
      this.append(item);
      return;
    }
    // if idx === 0
    if (idx === 0) {
      this.append(item);
      return;
    }

    this.increment();

    // insert at
    const curr = this.getAt(idx) as Node<T>;
    const node = { value: item } as Node<T>;

    node.next = curr;
    node.prev = curr.prev;
    curr.prev = node;
    if (node.prev) {
      node.prev.next = node;
    }
  }

  private removeNode(node: Node<T>): T | undefined {
    this.decrement();

    if (this.length === 0) {
      const out = this.head?.value;
      this.head = this.tail = undefined;
      return out;
    }

    if (!node) return;

    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (this.head === node) {
      this.head = node.next;
    }

    if (this.tail === node) {
      this.tail = node.prev;
    }

    node.prev = node.next = undefined;

    return node.value;
  }

  remove(item: T): T | undefined {
    if (!this.head) return undefined;
    let curr = this.head;
    for (let i = 0; curr && i < this.length; ++i) {
      if (curr.value === item) {
        break;
      }
      curr = curr.next as Node<T>;
    }
    if (!curr) return;

    this.decrement();

    if (this.length === 0) {
      const out = this.head?.value;
      this.head = this.tail = undefined;
      return out;
    }

    if (curr.prev) {
      curr.prev = curr.next;
    }
    if (curr.next) {
      curr.next.prev = curr.prev;
    }

    if (curr === this.head) {
      this.head = curr.next;
    }
    if (curr === this.tail) {
      this.tail = curr.prev;
    }

    curr.prev = curr.next = undefined;

    return curr.value;
  }

  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx);

    if (!node) return;

    return this.removeNode(node);
  }

  append(item: T): void {
    // increment length
    this.increment();
    // if length === 0
    const node = { value: item } as Node<T>;
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }
    // if length > 0
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    return;
  }

  get(idx: number): T | undefined {
    return this.getAt(idx)?.value;
  }

  private getAt(idx: number): Node<T> | undefined {
    let curr = this.head;
    for (let i = 0; curr && i < idx; ++i) {
      curr = curr.next as Node<T>;
    }
    return curr;
  }
}
