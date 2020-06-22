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

      let newLeft: number = e.clientX - nodeWidth / 2;
      let newTop: number = e.clientY - nodeWidth;

      if (e.clientX - nodeWidth / 2 <= 0) {
        newLeft = 0;
      } else if (e.clientX - nodeWidth / 2 >= canvasWidth - nodeWidth) {
        newLeft = canvasWidth - nodeWidth;
      }

      if (e.clientY - nodeWidth <= 0) {
        newTop = 0;
      } else if (e.clientY - nodeWidth >= canvasHeight - nodeWidth) {
        newTop = canvasHeight - nodeWidth;
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

        let newLeft: number = position.left;
        let newTop: number = position.top;

        if (position.left - nodeWidth / 2 <= 0) {
          newLeft = 0;
        } else if (position.left - nodeWidth / 2 >= canvasWidth - nodeWidth) {
          newLeft = canvasWidth - nodeWidth;
        }

        if (position.top - nodeWidth <= 0) {
          newTop = 0;
        } else if (position.top >= canvasHeight - nodeWidth) {
          newTop = canvasHeight - nodeWidth;
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
