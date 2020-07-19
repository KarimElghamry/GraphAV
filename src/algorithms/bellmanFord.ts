import asyncTimout from '../helpers/asyncTimout'

interface NodeInfo {
    shortestDistance: number;
    prevNode: number | undefined;
}

/*
 * BELLMAN-FORD
 * INPUT: Graph (adjacency), Weight, Source
 * Relax
 *
*/

const bellmanFord = async (
    startingNode: number,
    adjacencyList: Array<Array<number>>,
    visualizationSpeed: number,
    setVisited: Function,
) => {
    const infoTable: Array<NodeInfo> = [];


    // Init
    adjacencyList.forEach((_, index: number) => {
        const initial: NodeInfo = {
            shortestDistance: Number.MAX_SAFE_INTEGER,     // infinite
            prevNode: undefined, //nil
        }
        infoTable[index] = initial;
    });
    infoTable[startingNode].shortestDistance = 0;

    // Relax edges
    for (let v: number = 0; v < adjacencyList.length - 1; v++) {
        const visited: Array<number> = [];
        setVisited(visited);
        await asyncTimout(visualizationSpeed);
        for (const currentNode in adjacencyList) {
            visited.push(Number.parseInt(currentNode));
            setVisited(visited.slice());
            await asyncTimout(visualizationSpeed);
            for (const connectedNode of adjacencyList[currentNode]) {
                if (infoTable[connectedNode].shortestDistance > infoTable[currentNode].shortestDistance + 1) {  // TODO: replace +1 with edge weight
                    visited.push(connectedNode);
                    setVisited(visited.slice());
                    await asyncTimout(visualizationSpeed);
                    infoTable[connectedNode].shortestDistance = infoTable[currentNode].shortestDistance + 1;    // TODO: replace +1 with edge weight
                    infoTable[connectedNode].prevNode = Number.parseInt(currentNode);
                }
            }
        }
    }

    // check negative weight cycles
    const visited: Array<number> = [];
    for (const currentNode in adjacencyList) {
        visited.push(Number.parseInt(currentNode));
        setVisited(visited.slice());
        await asyncTimout(visualizationSpeed);
        for (const connectedNode of adjacencyList[currentNode]) {
            if (infoTable[connectedNode].shortestDistance + 1 < infoTable[currentNode].shortestDistance) {// TODO: replace +1 with weight
                return; //TODO: add negative cycle alert
            }
        }
    }
}


export default bellmanFord;