import React, {ReactElement, useEffect} from 'react';
import Container from './Container';
import Content from './Content';

interface Props {
  isVisible: boolean;
  onExit: Function;
  children?: React.ReactChild | React.ReactChildren;
}

const Modal: React.FC<Props> = (props: Props): ReactElement => {
  useEffect(() => {
    const handleExitKey = (event: KeyboardEvent) => {
      if (!props.isVisible) return;
      if (event.code === 'Escape') props.onExit();
    };

    document.addEventListener('keydown', handleExitKey);
    return () => document.removeEventListener('keydown', handleExitKey);
  }, [props]);

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
          >
            {props.children}
          </Content>
        </Container>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Modal;
