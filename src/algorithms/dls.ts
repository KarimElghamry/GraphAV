import helpers from "../helpers";

let visited: Array<number> = [];

const dlsWrapper = async (
  adjacencyList: Array<Array<number>>,
  startingNode: number,
  setVisited: Function,
  visualizationSpeed: number,
  setCurrentEdge: Function,
  maxDepth: number
) => {
  visited = [];
  setVisited([]);
  await dls(
    adjacencyList,
    startingNode,
    setVisited,
    visualizationSpeed,
    setCurrentEdge,
    -1,
    maxDepth,
    0
  );
};

const dls = async (
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
  if (currentDepth > maxDepth) return;
  await helpers.asyncTimout(visualizationSpeed);
  visited.push(node);
  setVisited(visited.slice());
  setCurrentEdge([previousNode, node]);

  for (const neighbour of adjacencyList[node])
    await dls(
      adjacencyList,
      neighbour,
      setVisited,
      visualizationSpeed,
      setCurrentEdge,
      node,
      maxDepth,
      currentDepth + 1
    );
};

export default dlsWrapper;
