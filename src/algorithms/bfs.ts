import asyncTimout from '../helpers/asyncTimout'

// const infoTable: Array<{
//     shortestDistance: number | undefined;
//     prevNode: number | undefined;
// }> = [];

let visited: Array<number> = [];

const bfsWrapper = async (
    adjacencyList: Array<Array<number>>,
    setVisited: Function,
    startingNode: number,
    visualizationSpeed: number
) => {
    visited = [];
    setVisited([]);
    await visitNode(setVisited, startingNode, visualizationSpeed);
    return await bfs(adjacencyList, setVisited, visualizationSpeed, [startingNode])
}

const bfs = async (
    adjacencyList: Array<Array<number>>,
    setVisited: Function,
    visualizationSpeed: number,
    nodesToExplore: Array<number>
) => {
    if (visited.length === adjacencyList.length) return;

    const nextNodesToExplore: Array<number> = [];
    for (const nodeToExplore of nodesToExplore) {
        for (const nodeToVisit of adjacencyList[nodeToExplore]) {
            await visitNode(setVisited, nodeToVisit, visualizationSpeed)
            nextNodesToExplore.push(nodeToVisit);
        }
    }
    console.log(nextNodesToExplore)
    bfs(adjacencyList, setVisited, visualizationSpeed, nextNodesToExplore);
}


const visitNode = async (
    setVisited: Function,
    node: number,
    visualizationSpeed: number,
) => {
    if (!visited.includes(node)) {
        await asyncTimout(visualizationSpeed)
        visited.push(node);
        setVisited(visited.slice())
    }
}

export default bfsWrapper;