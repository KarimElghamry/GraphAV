import React, {ReactElement} from 'react';
import Container from './Container';

const ContextMenu: React.FC = (): ReactElement => {
  return (
    <Container
      onDoubleClick={(e: React.MouseEvent) => e.stopPropagation()}
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
      onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}
      onMouseUp={(e: React.MouseEvent) => e.stopPropagation()}
    >
      <div></div>
    </Container>
  );
};

export default ContextMenu;
