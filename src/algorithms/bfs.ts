import asyncTimout from '../helpers/asyncTimout'

// const infoTable: Array<{
//     shortestDistance: number | undefined;
//     prevNode: number | undefined;
// }> = [];

const visited = new Map<number, boolean>();

const bfs = async (
    adjacencyList: Array<Array<number>>,
    setVisited: Function,
    startingNode: number,
    visualizationSpeed: number
) => {
    if (visited.get(startingNode)) return;
    asyncTimout(visualizationSpeed)
    visited.set(startingNode, true);
    adjacencyList[startingNode].forEach((neighbour: number) => {
        if (!visited.get(neighbour)) {
            visited.set(neighbour, true)
            setVisited(visited)
        }
    })
    adjacencyList[startingNode].forEach((neighbour: number) => {
        bfs(adjacencyList, setVisited, neighbour, visualizationSpeed)
    })
}

