import helpers from '../helpers';

let globalVisited: Array<number> = [];

const dfs = async (
  graph: Array<Array<number>>,
  node: number,
  setVisited: Function,
  visualizationSpeed: number,
  setCurrentEdge: Function,
  previousNode: number
): Promise<void> => {
  if (globalVisited.includes(node)) return;
  await helpers.asyncTimout(visualizationSpeed);
  globalVisited = globalVisited.concat(node);
  setVisited(globalVisited);
  setCurrentEdge([previousNode, node]);

  for (let neighbour of graph[node]) {
    await dfs(
      graph,
      neighbour,
      setVisited,
      visualizationSpeed,
      setCurrentEdge,
      node
    );
  }
};

const dfsWrapper = async (
  graph: Array<Array<number>>,
  node: number,
  setVisited: Function,
  visualizationSpeed: number,
  setCurrentEdge: Function
) => {
  globalVisited = [];

  await dfs(graph, node, setVisited, visualizationSpeed, setCurrentEdge, -1);
};

export default dfsWrapper;
