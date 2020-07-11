import React, {ReactElement} from 'react';
import Container from './Container';
import Content from './Content';

interface Props {
  isVisible: boolean;
  onExit: Function;
}

const Modal: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <React.Fragment>
      {props.isVisible ? (
        <Container
          onClick={(e: React.MouseEvent) => {
            props.onExit();
          }}
        >
          <Content
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
            }}
          ></Content>
        </Container>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Modal;
