import helpers from '../helpers';

const dfs = async (
  graph: Array<Array<number>>,
  node: number,
  visited: Array<number>,
  setVisited: Function
): Promise<void> => {
  if (visited.includes(node)) return;
  await helpers.asyncTimout(1000);
  visited = visited.concat(node);
  setVisited(visited);

  for (let neighbour of graph[node]) {
    dfs(graph, neighbour, visited, setVisited);
  }
};

export default dfs;
