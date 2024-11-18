export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    // if both null
    if (a === null && b === null) return true;
    // return true

    if (a === null || b === null) {
        return false;
    }

    // if number's match return true, else return false
    if (a?.value !== b?.value) {
        return false;
    }

    return compare(a?.left, b?.left) && compare(a?.right, b?.right);
}
