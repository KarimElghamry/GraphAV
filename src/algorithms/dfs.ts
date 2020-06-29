import helpers from '../helpers';

let globalVisited: Array<number> = [];

const dfs = async (
  graph: Array<Array<number>>,
  node: number,
  setVisited: Function
): Promise<void> => {
  if (globalVisited.includes(node)) return;
  await helpers.asyncTimout(1000);
  globalVisited = globalVisited.concat(node);
  setVisited(globalVisited);
  console.log(globalVisited);

  for (let neighbour of graph[node]) {
    await dfs(graph, neighbour, setVisited);
  }
};

const dfsWrapper = async (
  graph: Array<Array<number>>,
  node: number,
  setVisited: Function
) => {
  globalVisited = [];
  await dfs(graph, node, setVisited);
};

export default dfsWrapper;
