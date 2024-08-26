type Point = {
    x: number;
    y: number;
};

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
): boolean => {
    // BASE CASE(S)
    //      if we're at the end
    if (curr.x === end.x && curr.y === end.y) {
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
    //      GO NORTH
    //      GO SOUTH
    //      GO WEST
    //      GO EAST
    //          RECORD CURRENT POSITION
    return;
};

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {}
