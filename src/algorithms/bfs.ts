import asyncTimout from '../helpers/asyncTimout'

// const infoTable: Array<{
//     shortestDistance: number | undefined;
//     prevNode: number | undefined;
// }> = [];

const visited: Array<number> = [];

const bfs = async (
    adjacencyList: Array<Array<number>>,
    setVisited: Function,
    startingNode: number,
    visualizationSpeed: number
) => {
    setVisited([])
    if (visited.includes(startingNode)) return;
    await visitNode(setVisited, startingNode, visualizationSpeed, visited);
    for (const neighbour of adjacencyList[startingNode]) {
        await visitNode(setVisited, neighbour, visualizationSpeed, visited);
    }

    for (const neighbour of adjacencyList[startingNode]) {
        await exploreNode(adjacencyList, setVisited, neighbour, visualizationSpeed, visited);
    }
}


const visitNode = async (
    setVisited: Function,
    node: number,
    visualizationSpeed: number,
    visited: Array<number>
) => {
    if (!visited.includes(node)) {
        await asyncTimout(visualizationSpeed)
        visited.push(node);
        setVisited(visited.slice())
    }
}

const exploreNode = async (
    adjacencyList: Array<Array<number>>,
    setVisited: Function,
    node: number,
    visualizationSpeed: number,
    visited: Array<number>
) => {
    for (const neighbour of adjacencyList[node]) {
        await visitNode(setVisited, neighbour, visualizationSpeed, visited);

    }
}

export default bfs;