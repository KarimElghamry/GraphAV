import React, {ReactElement, useRef} from 'react';
import Container from './Container';
import GraphNode from '../GraphNode/GraphNode';
import Edge from '../Edge/Edge';
import NodeInfo from '../../models/NodeInfo';

interface Props {
  adjacencyList: Array<Array<number>>;
  visited: Array<number>;
  zoomPercentage: number;
  graphInfo: Array<NodeInfo>;
  onNodeConnect: (nodeIndex: number) => void;
}

const GraphCanvas: React.FC<Props> = (props: Props): ReactElement => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const adjacencyList = props.adjacencyList;
  const visited = props.visited;
  const nodeRefs = adjacencyList.map((_) => React.createRef<HTMLSpanElement>());
  const reducedEdges: Map<number, Array<number>> = new Map();
  const connectedNodePairs: Array<Array<number>> = [];

  adjacencyList.forEach((adjacentNodes: Array<number>, currentNode: number) => {
    const currentNodeEdges: Array<number> = [];
    adjacentNodes.forEach((adjacentNode: number) => {
      if (!reducedEdges.get(adjacentNode)?.includes(currentNode)) {
        currentNodeEdges.push(adjacentNode);
        connectedNodePairs.push([currentNode, adjacentNode]);
      }
    });
    if (currentNodeEdges.length !== 0) {
      reducedEdges.set(currentNode, currentNodeEdges);
    }
  });

  //TODO: change visitedEdge to be more efficient
  //TODO: add state for visited edge
  let visitedEdge: [number, number] = [-1, -1];
  for (let node of visited.reverse()) {
    if (adjacencyList[visited[visited.length - 1]].includes(node)) {
      visitedEdge = [node, visited[visited.length - 1]];
      break;
    }
  }

  return (
    <Container ref={canvasRef}>
      {adjacencyList.map((val: Array<number>, index: number) => {
        const nodeInfo: NodeInfo =
          index > props.graphInfo.length - 1
            ? ({shortestPath: undefined, previousNode: undefined} as NodeInfo)
            : props.graphInfo[index];
        return (
          <GraphNode
            connectNode={() => props.onNodeConnect(index)}
            key={index}
            canvasRef={canvasRef}
            isActive={visited.includes(index)}
            content={(index + 1).toString()}
            edgeRef={nodeRefs[index]}
            zoomPercentage={props.zoomPercentage}
            nodeInfo={nodeInfo}
          >
            <span ref={nodeRefs[index]}></span>
          </GraphNode>
        );
      })}

      {/* TODO:add directed logic */}
      {connectedNodePairs.map(([n1, n2]: Array<number>, index: number) => {
        const isVisited: boolean =
          (visitedEdge[0] === n1 && visitedEdge[1] === n2) ||
          (visitedEdge[0] === n2 && visitedEdge[1] === n1);
        return (
          <Edge
            n1={nodeRefs[n1]}
            n2={nodeRefs[n2]}
            key={`${n1}${n2}`}
            isDirected={n1 === 0}
            zoomPercentage={props.zoomPercentage}
            isVisited={isVisited}
          />
        );
      })}
    </Container>
  );
};

export default GraphCanvas;
