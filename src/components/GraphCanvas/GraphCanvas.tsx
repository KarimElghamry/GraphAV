import React, {ReactElement, useRef} from 'react';
import Container from './Container';
import GraphNode from '../GraphNode/GraphNode';

interface Props {
  adjacencyList: Array<Array<number>>;
}

const GraphCanvas: React.FC<Props> = (props: Props): ReactElement => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const adjacencyList = props.adjacencyList;

  return (
    <Container ref={canvasRef}>
      {adjacencyList.map((val: Array<number>, index: number) => {
        return (
          <GraphNode
            key={index}
            canvasRef={canvasRef}
            isActive={false}
            content={(index + 1).toString()}
          ></GraphNode>
        );
      })}
    </Container>
  );
};

export default GraphCanvas;
