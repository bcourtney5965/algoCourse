export default function dfs(
    head: BinaryNode<number> | null,
    needle: number,
): boolean {
    // if head === null
    if (!head) {
        return false;
    }

    // if found
    if (head.value === needle) {
        return true;
    }

    // if less than needle
    if (needle < head?.value) {
        return dfs(head.left, needle);
    }

    return dfs(head.right, needle);
}
