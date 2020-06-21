import React, {ReactElement, useRef} from 'react';
import Container from './Container';
import GraphNode from '../GraphNode/GraphNode';

const GraphCanvas: React.FC = (): ReactElement => {
  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <Container ref={canvasRef}>
      <GraphNode canvasRef={canvasRef} isActive={false} content="1"></GraphNode>
      <GraphNode canvasRef={canvasRef} isActive={false} content="2"></GraphNode>
      <GraphNode canvasRef={canvasRef} isActive={false} content="3"></GraphNode>
    </Container>
  );
};

export default GraphCanvas;
