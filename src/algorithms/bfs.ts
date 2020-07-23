import asyncTimout from '../helpers/asyncTimout';
import NodeInfo from '../models/NodeInfo';

const bfsWrapper = async (
  adjacencyList: Array<Array<number>>,
  setVisited: Function,
  startingNode: number,
  visualizationSpeed: number,
  setGraphInfo: Function,
  setCurrentEdge: Function
) => {
  // init
  const infoTable: Array<NodeInfo> = adjacencyList.map((neighbours, node) => {
    return {
      shortestPath: startingNode === node ? 0 : undefined,
      previousNode: undefined,
    } as NodeInfo;
  });
  const visited: Array<number> = [];
  setVisited(visited.slice());
  await visitNode(
    setVisited,
    startingNode,
    visualizationSpeed,
    visited,
    0,
    -1,
    infoTable,
    setGraphInfo
  ); //visit first node
  const nodesToExplore: Array<number> = [startingNode];
  setGraphInfo(infoTable.slice());

  // bfs
  while (nodesToExplore.length > 0) {
    const currentDepthNodes: Array<number> = nodesToExplore.slice();

    for (const nodeToExplore of currentDepthNodes) {
      for (const nodeToVisit of adjacencyList[nodeToExplore]) {
        const newDepth: number =
          (infoTable[nodeToExplore].shortestPath ?? 0) + 1; //TODO: replace 1 with weight of nodeToVisit edge
        if (!visited.includes(nodeToVisit)) {
          await visitNode(
            setVisited,
            nodeToVisit,
            visualizationSpeed,
            visited,
            newDepth,
            nodeToExplore,
            infoTable,
            setGraphInfo
          );
          setCurrentEdge([nodeToExplore, nodeToVisit]);
          const nodeInfo: NodeInfo = {
            shortestPath: newDepth,
            previousNode: nodeToExplore,
          };
          infoTable[nodeToVisit] = nodeInfo;
          setGraphInfo(infoTable.slice());

          nodesToExplore.push(nodeToVisit);
        }
      }
      nodesToExplore.shift();
    }
  }
};

const visitNode = async (
  setVisited: Function,
  node: number,
  visualizationSpeed: number,
  visited: Array<number>,
  depth: number,
  prevNode: number,
  infoTable: Array<NodeInfo>,
  setGraphInfo: Function
) => {
  await asyncTimout(visualizationSpeed);
  visited.push(node);
  setVisited(visited.slice());
};

export default bfsWrapper;
