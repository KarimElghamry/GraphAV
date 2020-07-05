import helpers from '../helpers';

//undefined == ∞

let infoTable: Array<{
  shortestDistance: number | undefined;
  prevNode: number | undefined;
}> = [];

let visited: Array<number> = [];

const dijkstra = async (
  adjacencyList: Array<Array<number>>,
  setVisited: Function,
  startingNode: number
) => {
  //initialize info table
  infoTable = [];
  adjacencyList.forEach((val: Array<number>, index: number) => {
    infoTable.push({
      shortestDistance: index === startingNode ? 0 : undefined,
      prevNode: undefined,
    });
  });

  visited = [];
  let currentNode: number = startingNode;

  while (visited.length !== adjacencyList.length) {
    helpers.asyncTimout(1000);
    visited.push(currentNode);
    setVisited(currentNode);

    for (let neighbour of adjacencyList[currentNode]) {
      if (visited.includes(neighbour)) continue;

      //TODO:change 1 when weighted graph is added
      const currentDistance =
        1 + (infoTable[currentNode].shortestDistance ?? 0);

      //check against current shortest path
      if (
        infoTable[neighbour].shortestDistance === undefined ||
        (infoTable[neighbour].shortestDistance ?? Number.POSITIVE_INFINITY) >
          currentDistance
      ) {
        infoTable[neighbour].shortestDistance = currentDistance;
        infoTable[neighbour].prevNode = currentNode;
      }
    }

    let minimumDistance: number = Number.POSITIVE_INFINITY;
    for (let i = 0; i < infoTable.length; i++) {
      const row = infoTable[i];
      if (row.shortestDistance === undefined) continue;
      if (visited.includes(i)) continue;

      if (minimumDistance > row.shortestDistance) currentNode = i;
    }
  }

  console.log(infoTable);
};

export default dijkstra;
