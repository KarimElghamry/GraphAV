import asyncTimout from "../helpers/asyncTimout";

let visited: Array<number> = []; // frontier
let toVisit: Array<number> = []; // includes nodes that are not reached in the current iteration
let maxDepth = 0;

const iddfsWrapper = async (
  adjacencyList: Array<Array<number>>,
  startingNode: number,
  setVisited: Function,
  visualizationSpeed: number,
  setCurrentEdge: Function
) => {
  // init
  toVisit = [0];
  maxDepth = 0;

  // main loop
  while (toVisit.length > 0) {
    //re init visited in every iteration
    visited = [];
    setVisited([]);
    setCurrentEdge([]); // current edge remains from last iteration, needs clearing
    await asyncTimout(visualizationSpeed);

    toVisit = []; // removes unvisited nodes from last iteration
    await iddfs(
      adjacencyList,
      startingNode,
      setVisited,
      visualizationSpeed,
      setCurrentEdge,
      -1,
      maxDepth,
      0
    );
    maxDepth += 1;
  }
  setCurrentEdge([]); // last traversed edge remains selected, needs clearing
};

const iddfs = async (
  adjacencyList: Array<Array<number>>,
  node: number,
  setVisited: Function,
  visualizationSpeed: number,
  setCurrentEdge: Function,
  previousNode: number,
  maxDepth: number,
  currentDepth: number
) => {
  if (visited.includes(node)) return;

  // visit node
  visited.push(node);
  setVisited(visited.slice());
  setCurrentEdge([previousNode, node]);
  await asyncTimout(visualizationSpeed);

  if (currentDepth === maxDepth) {
    // if next depth beyond max depth, add next level nodes to toVisit
    for (const neighbour of adjacencyList[node])
      if (!visited.includes(neighbour)) toVisit.push(neighbour);
    maxDepth += 1;
    return;
  } else {
    for (const neighbour of adjacencyList[node])
      await iddfs(
        adjacencyList,
        neighbour,
        setVisited,
        visualizationSpeed,
        setCurrentEdge,
        node,
        maxDepth,
        currentDepth + 1
      );
  }
};

export default iddfsWrapper;
