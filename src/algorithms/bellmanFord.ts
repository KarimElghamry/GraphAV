import asyncTimout from '../helpers/asyncTimout'

interface NodeInfo {
    shortestDistance: number | undefined;
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
    adjacencyList: Array<Array<number>>
) => {
    const dist: Array<number> = [];
    const prev: Array<number | undefined> = [];


    // Init
    adjacencyList.forEach((_, index: number) => {
        dist[index] = Number.MAX_SAFE_INTEGER     // infinite
        prev[index] = undefined;    // nil
    });
    dist[startingNode] = 0;

    // Relax edges
    for (let v: number = 0; v < adjacencyList.length - 1; v++) {
        for (const currentNode in adjacencyList) {
            for (const connectedNode of adjacencyList[currentNode]) {
                if (dist[connectedNode] > dist[currentNode] + 1) {  // replace +1 with edge weight
                    dist[connectedNode] = dist[currentNode] + 1;
                }
            }
        }
    }
}

export default bellmanFord;