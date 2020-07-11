import dfsWrapper from './dfs';
import dijkstra from './dijkstra';
import bfs from './bfs';
import bellmanFord from './bellmanFord';

const algorithms = {
  dfs: dfsWrapper,
  dijkstra: dijkstra,
  bfs: bfs,
  bellmanFord: bellmanFord
};

export default algorithms;
