import React, {ReactElement} from 'react';
import Container from './Container';

interface Props {
  isVisible: boolean;
}

const ContextMenu: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <Container
      onDoubleClick={(e: React.MouseEvent) => e.stopPropagation()}
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
      onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}
      onMouseUp={(e: React.MouseEvent) => e.stopPropagation()}
      isVisible={props.isVisible}
    >
      <div></div>
    </Container>
  );
};

export default ContextMenu;
