import React, {ReactElement, useRef, useState} from 'react';
import Container from './Container';
import GraphNode from '../GraphNode/GraphNode';
import Edge from '../Edge/Edge';
import NodeInfo from '../../models/NodeInfo';
import ContextMenu from '../common/ContextMenu/ContextMenu';
import ContextTile from '../common/ContextMenu/ContextTile';
import Position from '../../models/Position';

interface Props {
  adjacencyList: Array<Array<number>>;
  nodeKeys: Array<string>;
  visited: Array<number>;
  zoomPercentage: number;
  graphInfo: Array<NodeInfo>;
  currentEdge: [number, number];
  onEdgeDelete: (firstNode: number, secondNode: number) => void;
  onNodeDelete: (node: number) => void;
  addNewNode: () => void;
  clearCanvas: () => void;
}

const GraphCanvas: React.FC<Props> = (props: Props): ReactElement => {
  const [isContextMenuVisible, setIsContextMenuVisible] = useState<boolean>(
    false
  );
  const [contextMenuPosition, setContextMenuPosition] = useState<Position>({
    top: -100,
    left: -100,
  });
  const canvasRef = useRef<HTMLDivElement>(null);
  const adjacencyList = props.adjacencyList;
  const visited = props.visited;
  const currentEdge = props.currentEdge;
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

  return (
    <Container
      ref={canvasRef}
      onContextMenu={(e: React.MouseEvent) => {
        if (canvasRef.current) {
          e.preventDefault();
          const navbarHeight = canvasRef.current.offsetWidth < 700 ? 90 : 50;
          const left = e.clientX;
          const top = e.clientY;
          setContextMenuPosition({
            top: top - navbarHeight,
            left: left,
          } as Position);
          setIsContextMenuVisible(true);
        }
      }}
    >
      {adjacencyList.map((val: Array<number>, index: number) => {
        const nodeInfo: NodeInfo =
          index > props.graphInfo.length - 1
            ? ({shortestPath: undefined, previousNode: undefined} as NodeInfo)
            : props.graphInfo[index];

        const onDelete = () => {
          props.onNodeDelete(index);
        };

        const onEdgeDelete = (secondNode: number) => {
          props.onEdgeDelete(index, secondNode);
        };

        return (
          <GraphNode
            key={props.nodeKeys[index]}
            nodeIndex={index}
            canvasRef={canvasRef}
            isActive={visited.includes(index)}
            edgeRef={nodeRefs[index]}
            zoomPercentage={props.zoomPercentage}
            nodeInfo={nodeInfo}
            onDelete={onDelete}
            onEdgeDelete={onEdgeDelete}
            adjacencyList={adjacencyList}
            initialPosition={contextMenuPosition}
          >
            <span ref={nodeRefs[index]}></span>
          </GraphNode>
        );
      })}

      {/* TODO:add directed logic */}
      {connectedNodePairs.map(([n1, n2]: Array<number>, index: number) => {
        const isVisited: boolean =
          (currentEdge[0] === n1 && currentEdge[1] === n2) ||
          (currentEdge[0] === n2 && currentEdge[1] === n1);

        return (
          <Edge
            n1={nodeRefs[n1]}
            n2={nodeRefs[n2]}
            key={`${props.nodeKeys[n1]}${props.nodeKeys[n2]}`}
            edgeKey={`${props.nodeKeys[n1]}${props.nodeKeys[n2]}`}
            isDirected={!adjacencyList[n2].includes(n1)}
            zoomPercentage={props.zoomPercentage}
            isVisited={isVisited}
          />
        );
      })}

      <ContextMenu
        isVisible={isContextMenuVisible}
        position={contextMenuPosition}
        setIsVisible={(val: boolean) => {
          setContextMenuPosition({top: -100, left: -100});
          setIsContextMenuVisible(val);
        }}
        canvasRef={canvasRef}
      >
        <ContextTile
          onClick={() => {
            props.addNewNode();
            setIsContextMenuVisible(false);
            setTimeout(
              () => setContextMenuPosition({top: -100, left: -100}),
              0
            );
          }}
        >
          Add node
        </ContextTile>
        <ContextTile
          onClick={() => {
            props.clearCanvas();
            setIsContextMenuVisible(false);
            setContextMenuPosition({top: -100, left: -100});
          }}
        >
          Clear canvas
        </ContextTile>
      </ContextMenu>
    </Container>
  );
};

export default GraphCanvas;
