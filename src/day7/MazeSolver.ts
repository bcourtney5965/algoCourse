type Point = {
    x: number;
    y: number;
};

const dir = [
    [0, -1], // north
    [1, 0], // east
    [0, 1], // south
    [-1, 0], // west
];

const locationIsOutsideMaze = (location: Point, maze: string[]): boolean => {
    const { x, y } = location;
    const width: number = maze[0]?.length || 0;
    const height: number = maze.length || 0;
    return x < 0 || x >= width || y < 0 || y >= height;
};

const walk = (
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[] = [],
): boolean => {
    // BASE CASE(S)
    //          WE'VE REACHED THE END
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
        //      WE'RE OFF THE BOARD
    } else if (locationIsOutsideMaze(curr, maze)) {
        return false;
        //      WE'VE ALREADY VISITED THIS POSITION
    } else if (seen[curr.y][curr.x]) {
        return false;
        //      WE'RE AT A WALL
    } else if (maze[curr.y][curr.x] === wall) {
        return false;
    }
    // RESURSIVE CASE
    // pre
    seen[curr.y][curr.x] = true;
    path.push(curr);
    // recurse
    for (let i = 0; i < dir.length; i++) {
        const [dx, dy] = dir[i];
        const isSuccessful = walk(
            maze,
            wall,
            { x: curr.x + dx, y: curr.y + dy },
            end,
            seen,
            path,
        );
        if (isSuccessful) return true;
    }
    // post
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

    for (let i = 0; i < maze.length; i++) {
        seen[i] = [];
        for (let j = 0; j < maze[i].length; j++) {
            seen[i][j] = false;
        }
    }
    walk(maze, wall, start, end, seen, path);
    return path;
}
