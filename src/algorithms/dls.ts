import helpers from "../helpers";

const visited: Array<number> = [];

const dlsWrapper = async (
  adjacencyList: Array<Array<number>>,
  startingNode: number,
  setVisited: Function,
  visualizationSpeed: number,
  setCurrentEdge: Function,
  maxDepth: number
) => {
  await dls(
    adjacencyList,
    startingNode,
    setVisited,
    visualizationSpeed,
    setCurrentEdge,
    0,
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
  if (currentDepth === maxDepth) return;
  visited.push(node);
  setVisited(visited.slice());
  setCurrentEdge([previousNode, node]);
  await helpers.asyncTimout(visualizationSpeed);

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
