import helpers from '../helpers';
import NodeInfo from '../models/NodeInfo';

//undefined == ∞

let infoTable: Array<NodeInfo> = [];

let visited: Array<number> = [];

const dijkstra = async (
  adjacencyList: Array<Array<number>>,
  setVisited: Function,
  startingNode: number,
  visualizationSpeed: number,
  setGraphInfo: Function,
  setCurrentEdge: Function
) => {
  //initialize info table
  infoTable = [];
  adjacencyList.forEach((val: Array<number>, index: number) => {
    infoTable.push({
      shortestPath: index === startingNode ? 0 : undefined,
      previousNode: undefined,
    });
  });
  setGraphInfo(infoTable);
  setCurrentEdge([-1, -1]);

  visited = [];
  let currentNode: number = startingNode;

  while (!visited.includes(currentNode)) {
    await helpers.asyncTimout(visualizationSpeed);
    visited = visited.concat(currentNode);
    setVisited(visited);
    setCurrentEdge([-1, -1]);

    for (let neighbour of adjacencyList[currentNode]) {
      if (visited.includes(neighbour)) continue;

      //TODO:change 1 when weighted graph is added
      const currentDistance = 1 + (infoTable[currentNode].shortestPath ?? 0);

      await helpers.asyncTimout(visualizationSpeed);
      setCurrentEdge([currentNode, neighbour]);
      //check against current shortest path
      if (
        infoTable[neighbour].shortestPath === undefined ||
        (infoTable[neighbour].shortestPath ?? Number.POSITIVE_INFINITY) >
          currentDistance
      ) {
        infoTable[neighbour].shortestPath = currentDistance;
        infoTable[neighbour].previousNode = currentNode;
        setGraphInfo(infoTable.slice());
      }
      console.log('eminem');
    }

    let minimumDistance: number = Number.POSITIVE_INFINITY;
    for (let i = 0; i < infoTable.length; i++) {
      const row = infoTable[i];
      if (row.shortestPath === undefined) continue;
      if (visited.includes(i)) continue;

      if (minimumDistance > row.shortestPath) {
        currentNode = i;
        minimumDistance = row.shortestPath;
      }
    }
  }

  console.log(infoTable);
};

export default dijkstra;
