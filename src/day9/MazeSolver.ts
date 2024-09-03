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
    start: Point,
    end: Point,
    wall: string,
    maze: string[],
    path: number[][],
): boolean | Point[][] => {
    // BASE CASES
    // if at the end
    if (start.x === end.x && start.y === end.y) {
        path.push(start);
        return true;
    }
    // if outside
    if (
        start.x < 0 ||
        start.x > maze[0][0].length ||
        start.y < 0 ||
        start.y > maze[0].length
    ) {
        return false;
    }
    // if at a wall
    if (maze[start.y][start.x] === wall) {
        return false;
    }
    // if already visited
    if ((path[start.y], [start.x])) {
        return false;
    }
    // RECURSIVE CASE
    for (let i = 0; i < directions.length; ++i) {
        if (
            walk(
                start.x + directions[i][1],
                start.y + directions[i][0],
                end,
                wall,
                maze,
                path,
            )
        ) {
            return path;
        }
    }
};

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const x: number[] = new Array(maze[0][0].length).fill(0);
    const path: [][] = new Array(maze[0].length).fill(x.slice(0));
    console.log(
        "scalloped potatoes::: JSON.stringify(path)",
        JSON.stringify(path),
    );
    const out: Point[] = walk(maze, wall, start, end, path);
    return out;
}
