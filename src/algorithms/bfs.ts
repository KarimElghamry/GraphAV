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
    const depth: number = 0;

    initBfs(setVisited, infoTable, visited);

    await visitNode(
        setVisited,
        startingNode,
        visualizationSpeed,
        visited,
        depth,
        -1,     // previous node of first node
        infoTable
    );

    return await bfs(
        adjacencyList,
        setVisited,
        visualizationSpeed,
        [startingNode],
        visited,
        depth,
        infoTable
    )
}

const bfs = async (
    adjacencyList: Array<Array<number>>,
    setVisited: Function,
    visualizationSpeed: number,
    nodesToExplore: Array<number>,
    visited: Array<number>,
    depth: number,
    infoTable: Array<NodeInfo>,
) => {
    if (visited.length === adjacencyList.length) return;    //base case: all nodes visited
    const currentDepth: number = ++depth;   //TODO: change increment value when using weighted graphs

    const nextNodesToExplore: Array<number> = [];

    for (const nodeToExplore of nodesToExplore) {
        for (const nodeToVisit of adjacencyList[nodeToExplore]) {
            await visitNode(
                setVisited,
                nodeToVisit,
                visualizationSpeed,
                visited,
                currentDepth,
                nodeToExplore,
                infoTable
            );
            nextNodesToExplore.push(nodeToVisit);
        }
    }
    await bfs(
        adjacencyList,
        setVisited,
        visualizationSpeed,
        nextNodesToExplore,
        visited,
        currentDepth,
        infoTable
    );
}


const visitNode = async (
    setVisited: Function,
    node: number,
    visualizationSpeed: number,
    visited: Array<number>,
    depth: number,
    prevNode: number,
    infoTable: Array<NodeInfo>
) => {
    if (!visited.includes(node)) {
        await asyncTimout(visualizationSpeed)
        visited.push(node);
        setVisited(visited.slice())
        const nodeInfo: NodeInfo = { shortestDistance: depth, prevNode: prevNode };
        infoTable[node] = nodeInfo;
    }
}

const initBfs = async (
    setVisited: Function,
    infoTable: Array<NodeInfo>,
    visited: Array<number>,
) => {
    visited = [];
    infoTable = [];
    setVisited(visited);
}

export default bfsWrapper;