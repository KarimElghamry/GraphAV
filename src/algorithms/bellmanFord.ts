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
    adjacencyList: Array<Array<number>>,
    visualizationSpeed: number,
    setVisited: Function,
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
        let visited: Array<number> = [];
        setVisited(visited);
        await asyncTimout(visualizationSpeed);
        for (const currentNode in adjacencyList) {
            visited.push(Number.parseInt(currentNode));
            setVisited(visited.slice());
            await asyncTimout(visualizationSpeed);
            for (const connectedNode of adjacencyList[currentNode]) {
                if (dist[connectedNode] > dist[currentNode] + 1) {  // TODO: replace +1 with edge weight
                    visited.push(connectedNode);
                    setVisited(visited.slice());
                    await asyncTimout(visualizationSpeed);
                    dist[connectedNode] = dist[currentNode] + 1;
                }
            }
        }

        // check negative weight cycles
        visited = [];
        for (const currentNode in adjacencyList) {
            visited.push(Number.parseInt(currentNode));
            setVisited(visited.slice());
            await asyncTimout(visualizationSpeed);
            for (const connectedNode of adjacencyList[currentNode]) {
                if (dist[connectedNode] + 1 < dist[currentNode]) {// TODO: replace +1 with weight
                    return; //TODO: add negative cycle alert
                }
            }
        }
    }
}


export default bellmanFord;