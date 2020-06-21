import React, {ReactElement} from 'react';
import Container from './Container';
import GraphNode from '../GraphNode/GraphNode';

const GraphCanvas: React.FC = (): ReactElement => {
  return (
    <Container>
      <GraphNode isActive={false} content="1"></GraphNode>
    </Container>
  );
};

export default GraphCanvas;
