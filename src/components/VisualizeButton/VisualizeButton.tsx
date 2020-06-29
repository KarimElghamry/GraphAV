import React, {ReactElement} from 'react';
import Container from './Container';

interface Props {
  onClick: Function;
  isVisualizing: boolean;
}

const VisualizeButton: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <Container onClick={() => props.onClick()}>
      {props.isVisualizing ? 'Visualizing' : 'Visualize'}
    </Container>
  );
};

export default VisualizeButton;
