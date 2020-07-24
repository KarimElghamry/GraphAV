import dfsWrapper from "./dfs";
import dijkstra from "./dijkstra";
import bfs from "./bfs";
import bellmanFord from "./bellmanFord";
import iddfs from "./iddfs";

const algorithms = {
  dfs: dfsWrapper,
  dijkstra: dijkstra,
  bfs: bfs,
  bellmanFord: bellmanFord,
  iddfs: iddfs,
};

export default algorithms;
