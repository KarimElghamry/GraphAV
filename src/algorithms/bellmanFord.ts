import asyncTimout from '../helpers/asyncTimout'
import NodeInfo from '../models/NodeInfo';

const bellmanFord = async (
    startingNode: number,
    adjacencyList: Array<Array<number>>,
    visualizationSpeed: number,
    setVisited: Function,
    setGraphInfo: Function,
    setCurrentEdge: Function,
) => {
    // init
    const infoTable: Array<NodeInfo> = adjacencyList.map((neighbours, node) => {
        return {
            shortestPath: undefined,    // infinite
            previousNode: undefined,    //nil
        }
    });
    infoTable[startingNode].shortestPath = 0;
    setGraphInfo(infoTable)

    // Relax edges
    for (let v: number = 0; v < adjacencyList.length - 1; v++) {
        for (const currentNode in adjacencyList) {
            const node: number = Number.parseInt(currentNode);
            setVisited([node]);
            await asyncTimout(visualizationSpeed);
            if (infoTable[currentNode].shortestPath !== undefined) {

                for (const connectedNode of adjacencyList[currentNode]) {
                    setCurrentEdge([node, connectedNode]);
                    if ((infoTable[connectedNode].shortestPath ?? Number.MAX_SAFE_INTEGER) >
                        (infoTable[node].shortestPath ?? Number.MAX_SAFE_INTEGER) + 1) {  // TODO: replace +1 with edge weight
                        infoTable[connectedNode].shortestPath = (infoTable[node].shortestPath ?? 0) + 1;    // TODO: replace +1 with edge weight
                        infoTable[connectedNode].previousNode = node;
                        setGraphInfo(infoTable.slice());
                    }
                    await asyncTimout(visualizationSpeed);
                    setCurrentEdge([undefined, undefined]);
                }
            }
        }
    }

    // check negative weight cycles
    // TODO: check functionality after adding weights
    for (const currentNode in adjacencyList) {
        setVisited([Number.parseInt(currentNode)]);
        await asyncTimout(visualizationSpeed);
        for (const connectedNode of adjacencyList[currentNode]) {
            if ((infoTable[connectedNode].shortestPath ?? Number.MAX_SAFE_INTEGER) + 1 < (infoTable[connectedNode].shortestPath ?? Number.MAX_SAFE_INTEGER)) {// TODO: replace +1 with weight
                return; //TODO: add negative cycle alert
            }
        }
    }

    setVisited(adjacencyList.map((_, index) => index));
}


export default bellmanFord;