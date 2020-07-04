import helpers from '../helpers';

let globalVisited: Array<number> = [];

const dfs = async (
  graph: Array<Array<number>>,
  node: number,
  setVisited: Function,
  visualizationSpeed: number
): Promise<void> => {
  if (globalVisited.includes(node)) return;
  await helpers.asyncTimout(visualizationSpeed);
  globalVisited = globalVisited.concat(node);
  setVisited(globalVisited);
  console.log(globalVisited);

  for (let neighbour of graph[node]) {
    await dfs(graph, neighbour, setVisited, visualizationSpeed);
  }
};

const dfsWrapper = async (
  graph: Array<Array<number>>,
  node: number,
  setVisited: Function,
  visualizationSpeed: number
) => {
  globalVisited = [];
  await dfs(graph, node, setVisited, visualizationSpeed);
};

export default dfsWrapper;
