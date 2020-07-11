import React, {ReactElement} from 'react';
import Container from './Container';
import Content from './Content';

interface Props {
  isVisible: boolean;
}

const Modal: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <Container>
      <Content></Content>
    </Container>
  );
};

export default Modal;
