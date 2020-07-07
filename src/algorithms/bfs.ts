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
    initBfs(setVisited, infoTable, visited);
    await visitNode(setVisited, startingNode, visualizationSpeed, visited, 0, -1, infoTable); //visit first node
    const nodesToExplore: Array<number> = [startingNode];
    while (nodesToExplore.length > 0) {

        const currentDepthNodes: Array<number> = nodesToExplore.slice();

        for (const nodeToExplore of currentDepthNodes) {
            for (const nodeToVisit of adjacencyList[nodeToExplore]) {
                const newDepth: number = (infoTable[nodeToExplore].shortestDistance ?? 0) + 1; //TODO: replace 1 with weight of nodeToVisit edge
                if (!visited.includes(nodeToVisit)) {
                    await visitNode(
                        setVisited,
                        nodeToVisit,
                        visualizationSpeed,
                        visited,
                        newDepth,
                        nodeToExplore,
                        infoTable
                    );
                    nodesToExplore.push(nodeToVisit)
                }
            }
            nodesToExplore.shift()
        }
    }
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
    await asyncTimout(visualizationSpeed)
    visited.push(node);
    setVisited(visited.slice())
    const nodeInfo: NodeInfo = { shortestDistance: depth, prevNode: prevNode };
    infoTable[node] = nodeInfo;

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