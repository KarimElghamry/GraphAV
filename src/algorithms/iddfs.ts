import asyncTimout from "../helpers/asyncTimout";

const visited: Array<number> = []; // frontier

const iddfsWrapper = async (
  adjacencyList: Array<Array<number>>,
  startingNode: number,
  setVisited: Function,
  visualizationSpeed: number,
  setCurrentEdge: Function
) => {
  setVisited([]);
  await iddfs(
    adjacencyList,
    startingNode,
    setVisited,
    visualizationSpeed,
    setCurrentEdge,
    0,
    0,
    0
  );
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
  if (currentDepth === maxDepth) return;
  visited.push(node);
  setVisited(visited.slice());
  setCurrentEdge([previousNode, node]);
  asyncTimout(visualizationSpeed);

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
};

export default iddfsWrapper;
