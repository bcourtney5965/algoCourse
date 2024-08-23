type Point = {
    x: number;
    y: number;
};

const locationIsOutsideMaze = (location: Point, maze: string[]): boolean => {
    const { x, y } = location;
    const width: number = maze[0]?.length || 0;
    const height: number = maze.length || 0;
    return x < 0 || x > width - 1 || y < 0 || y > height - 1;
};

const alreadyVisited = (maze: string[], location: Point): boolean => {
    return maze[location.y][location.x] === "1";
};

const walk = (
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
    path: Point[],
    location = start,
) => {
    // BASE CASE(S)
    //      if we're at the end
    if (location.x === end.x && location.y === end.y) {
        return location;
        //      WE'RE AT A WALL
    } else if (locationIsOutsideMaze(location, maze)) {
        //      WE'RE OFF THE BOARD
        return;
        //      WE'VE VISITED THIS SPOT BEFORE
    } else if (alreadyVisited(maze, location)) {
        return;
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
