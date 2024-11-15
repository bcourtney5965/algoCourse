function worker(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    return true;
}

export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    return worker(a, b);
}
