import React, { ReactElement, useRef } from 'react';
import Container from './Container';
import GraphNode from '../GraphNode/GraphNode';
import NodeLink from '../NodeLink/NodeLink';
interface Props {
  adjacencyList: Array<Array<number>>;
  visited: Array<number>;
}

const GraphCanvas: React.FC<Props> = (props: Props): ReactElement => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const adjacencyList = props.adjacencyList;
  const visited = props.visited;
  const nodeRefs = adjacencyList.map(x => React.createRef<HTMLSpanElement>());

  return (
    <Container ref={canvasRef}>
      {adjacencyList.map((val: Array<number>, index: number) => {
        return (

          <GraphNode
            key={index}
            canvasRef={canvasRef}
            isActive={visited.includes(index)}
            content={(index + 1).toString()}
          >
            <span
              ref={nodeRefs[index]}></span>
          </GraphNode>

        );
      })}
      <NodeLink n1={nodeRefs[0]} n2={nodeRefs[1]} />
      {console.log(nodeRefs)}
    </Container>
  );
};

export default GraphCanvas;
