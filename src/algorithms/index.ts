import dfsWrapper from "./dfs";
import dijkstra from "./dijkstra";
import bfs from "./bfs";
import bellmanFord from "./bellmanFord";
import iddfs from "./iddfs";
import dls from "./dls";

const algorithms = {
  dfs: dfsWrapper,
  dijkstra: dijkstra,
  bfs: bfs,
  bellmanFord: bellmanFord,
  iddfs: iddfs,
  dls: dls
};

export default algorithms;
