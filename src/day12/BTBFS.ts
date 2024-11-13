function walk(curr: BinaryNode<number> | null, needle: number): boolean {}

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    return walk(head, needle) || false;
}
