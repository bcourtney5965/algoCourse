type Point = {
    x: number;
    y: number;
};

const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
];

const walk = (
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    path: Point[],
    seen: boolean[][],
): boolean => {
    // BASE CASES
    // if at the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }

    // if outside
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    // if at a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // if already visited
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // RECURSIVE CASE
    // Pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // Recurse
    for (let i = 0; i < directions.length; ++i) {
        const [x, y] = directions[i];
        if (
            walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, path, seen)
        ) {
            return true;
        }
    }

    // Post
    path.pop();
    return false;
};

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, path, seen);
    return path;
}
