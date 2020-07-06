import asyncTimout from '../helpers/asyncTimout'

interface NodeInfo {
    shortestDistance: number | undefined;
    prevNode: number | undefined;
}



const bfsWrapper = async (
    adjacencyList: Array<Array<number>>,
    setVisited: Function,
    startingNode: number,
    visualizationSpeed: number
) => {

    const infoTable: Array<NodeInfo> = [];
    const visited: Array<number> = [];
    initBfs(setVisited, infoTable, adjacencyList, startingNode, visited);
    await visitNode(setVisited, startingNode, visualizationSpeed, visited);
    return await bfs(adjacencyList, setVisited, visualizationSpeed, [startingNode], visited)
}

const bfs = async (
    adjacencyList: Array<Array<number>>,
    setVisited: Function,
    visualizationSpeed: number,
    nodesToExplore: Array<number>,
    visited: Array<number>
) => {
    if (visited.length === adjacencyList.length) return;

    const nextNodesToExplore: Array<number> = [];
    for (const nodeToExplore of nodesToExplore) {
        for (const nodeToVisit of adjacencyList[nodeToExplore]) {
            await visitNode(setVisited, nodeToVisit, visualizationSpeed, visited)
            nextNodesToExplore.push(nodeToVisit);
        }
    }
    bfs(adjacencyList, setVisited, visualizationSpeed, nextNodesToExplore, visited);
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

const initBfs = async (
    setVisited: Function,
    infoTable: Array<NodeInfo>,
    adjacencyList: Array<Array<number>>,
    startingNode: number,
    visited: Array<number>
) => {
    visited = [];
    setVisited([]);
    infoTable = [];
    adjacencyList.forEach((_, index: number) => {
        infoTable.push({
            shortestDistance: index === startingNode ? 0 : undefined,
            prevNode: undefined,
        });
    });

}

export default bfsWrapper;