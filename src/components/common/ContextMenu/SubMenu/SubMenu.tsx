import React, {ReactElement, useRef, useEffect, useState} from 'react';
import Container from './Container';

interface Props {
  canvasRef: React.RefObject<HTMLDivElement>;
  children?:
    | Array<ReactElement>
    | ReactElement
    | React.ReactChild
    | React.ReactChildren;
}

const SubMenu: React.FC<Props> = (props: Props): ReactElement => {
  const eminem = useRef<HTMLDivElement>(null);
  const canvasRef = props.canvasRef;
  const menuWidth = 408;
  const menuHeight = 408;
  const [isXReversed, setIsXReversed] = useState<boolean>(true);
  const [isYReversed, setIsYReversed] = useState<boolean>(true);

  useEffect(() => {
    if (
      canvasRef.current &&
      eminem.current &&
      eminem.current.parentElement?.parentElement
    ) {
      if (
        canvasRef.current.offsetWidth -
          eminem.current.parentElement?.parentElement.offsetLeft <=
        menuWidth
      ) {
        setIsXReversed(true);
      } else {
        setIsXReversed(false);
      }

      if (
        canvasRef.current.offsetHeight -
          eminem.current.parentElement?.parentElement.offsetTop <=
        menuHeight
      ) {
        setIsYReversed(true);
      } else {
        setIsYReversed(false);
      }
    }
  }, [eminem, canvasRef, setIsXReversed, setIsYReversed]);

  return (
    <Container isYReversed={isYReversed} isXReversed={isXReversed} ref={eminem}>
      {props.children}
    </Container>
  );
};

export default SubMenu;
