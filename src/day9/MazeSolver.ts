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
    path: number[][],
    seen: boolean[][]
): boolean | Point[][] => {
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
    if ((seen[curr.y], [curr.x])) {
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
