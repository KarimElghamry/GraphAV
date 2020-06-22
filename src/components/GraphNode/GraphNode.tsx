import React, {ReactElement, useState, useRef, useEffect} from 'react';
import Container from './Container';
import Position from '../../models/Position';

interface Props {
  isActive: boolean;
  content: string;
  canvasRef: React.RefObject<HTMLDivElement>;
}

const GraphNode: React.FC<Props> = (props: Props): ReactElement => {
  const [position, setPosition] = useState<Position>({top: 600, left: 600});
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (nodeRef.current !== null && props.canvasRef.current !== null) {
      const nodeWidth: number = +nodeRef.current.offsetWidth;
      const canvasWidth: number = +props.canvasRef.current.offsetWidth;
      const canvasHeight: number = +props.canvasRef.current.offsetHeight;

      let newLeft: number, newTop: number;
      if (e.clientX - nodeWidth / 2 <= 0) {
        newLeft = 0;
      } else if (e.clientX - nodeWidth / 2 >= canvasWidth - nodeWidth) {
        newLeft = canvasWidth - nodeWidth;
      } else {
        newLeft = e.clientX - nodeWidth / 2;
      }

      if (e.clientY - nodeWidth <= 0) {
        newTop = 0;
      } else if (e.clientY - nodeWidth >= canvasHeight - nodeWidth) {
        newTop = canvasHeight - nodeWidth;
      } else {
        newTop = e.clientY - nodeWidth;
      }

      setPosition({
        top: newTop,
        left: newLeft,
      });
    }
  };
  const handleMouseDown = () => {
    document.onmousemove = handleMouseMove;
    document.onmouseup = handleMouseUp;
  };
  const handleMouseUp = () => {
    document.onmousemove = null;
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (nodeRef.current !== null && props.canvasRef.current !== null) {
        const nodeWidth: number = +nodeRef.current.offsetWidth;
        const canvasWidth: number = +props.canvasRef.current.offsetWidth;
        const canvasHeight: number = +props.canvasRef.current.offsetHeight;

        let newLeft: number, newTop: number;
        if (position.left - nodeWidth / 2 <= 0) {
          newLeft = 0;
        } else if (position.left - nodeWidth / 2 >= canvasWidth - nodeWidth) {
          newLeft = canvasWidth - nodeWidth;
        } else {
          newLeft = position.left;
        }

        if (position.top - nodeWidth <= 0) {
          newTop = 0;
        } else if (position.top >= canvasHeight - nodeWidth) {
          newTop = canvasHeight - nodeWidth;
        } else {
          newTop = position.top;
        }

        setPosition({
          top: newTop,
          left: newLeft,
        });
      }
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [nodeRef, props.canvasRef, position]);

  return (
    <Container
      isActive={props.isActive}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      position={position}
      ref={nodeRef}
    >
      {props.content}
    </Container>
  );
};

export default GraphNode;
