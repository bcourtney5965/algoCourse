function walk(
    curr: BinaryNode<number> | null,
    needle: number,
    list: BinaryNode<number>[],
): boolean {
    if (!curr) return false;

    // if found
    if (curr.value === needle) return true;

    // add left
    if (curr.left) {
        list.push(curr.left);
    }
    // add right
    if (curr.right) {
        list.push(curr.right);
    }

    const node = list.shift();
    if (node) {
        // recurse
        return walk(node, needle, list);
    }

    return false;
}

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    return walk(head, needle, []);
}
