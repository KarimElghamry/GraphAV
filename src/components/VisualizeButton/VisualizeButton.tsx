import React, {ReactElement} from 'react';
import Container from './Container';

interface Props {
  onClick: Function;
}

const VisualizeButton: React.FC<Props> = (props: Props): ReactElement => {
  return <Container onClick={() => props.onClick()}>Visualize</Container>;
};

export default VisualizeButton;
