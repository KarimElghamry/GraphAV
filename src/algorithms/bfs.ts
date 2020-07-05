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
    console.log(startingNode)
    visited.clear();
    setVisited(Array.from(visited.keys()))
    if (visited.get(startingNode)) return;
    await visitNode(setVisited, startingNode, visualizationSpeed);
    for (const neighbour of adjacencyList[startingNode]) {
        await visitNode(setVisited, neighbour, visualizationSpeed);
    }

    for (const neighbour of adjacencyList[startingNode]) {
        await exploreNode(adjacencyList, setVisited, neighbour, visualizationSpeed);
    }
}

export default bfs

const visitNode = async (
    setVisited: Function,
    node: number,
    visualizationSpeed: number
) => {
    if (!visited.get(node)) {
        await asyncTimout(visualizationSpeed)
        visited.set(node, true)
        setVisited(Array.from(visited.keys()))
    }
}

const exploreNode = async (
    adjacencyList: Array<Array<number>>,
    setVisited: Function,
    node: number,
    visualizationSpeed: number
) => {
    for (const neighbour of adjacencyList[node]) {
        await visitNode(setVisited, neighbour, visualizationSpeed);
    }
}

