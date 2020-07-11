import React, {ReactElement} from 'react';
import Container from './Container';
import Content from './Content';

interface Props {
  isVisible: boolean;
}

const Modal: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <React.Fragment>
      {props.isVisible ? (
        <Container>
          <Content></Content>
        </Container>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Modal;
