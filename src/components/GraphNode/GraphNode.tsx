import React, {ReactElement, useState, useRef, useEffect} from 'react';
import Container from './Container';
import Position from '../../models/Position';
import Information from './Information';

interface Props {
  isActive: boolean;
  content: string;
  canvasRef: React.RefObject<HTMLDivElement>;
  children: React.ReactChild | React.ReactChildren;
  edgeRef: React.RefObject<HTMLSpanElement> | null;
  zoomPercentage: number;
  connectNode: VoidFunction;
}

const GraphNode: React.FC<Props> = (props: Props): ReactElement => {
  const [position, setPosition] = useState<Position>({top: 100, left: 100});
  const nodeRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const canvasRef: React.RefObject<HTMLDivElement> = props.canvasRef;
  const infoWidth: number = 20;
  const infoPosition: Position = {
    top: position.top + (nodeRef.current?.offsetHeight ?? 0),
    left:
      position.left - infoWidth / 2 + (nodeRef.current?.offsetWidth ?? 0) / 2,
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (nodeRef.current !== null && canvasRef.current !== null) {
      const nodeWidth: number = +nodeRef.current.offsetWidth;
      const canvasWidth: number = +canvasRef.current.offsetWidth;
      const canvasHeight: number = +canvasRef.current.offsetHeight;
      const navbarHeight: number = canvasWidth < 700 ? 90 : 50;

      let newLeft: number = e.clientX - nodeWidth / 2;
      let newTop: number = e.clientY - navbarHeight - nodeWidth / 2;

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
    props.connectNode();
  };
  const handleMouseUp = () => {
    document.onmousemove = null;
  };

  useEffect(() => {
    if (props.edgeRef?.current && nodeRef.current) {
      const halfNodeWidth: number = +nodeRef.current.offsetWidth / 2;
      const edgePosition: Position = {
        top: position.top + halfNodeWidth,
        left: position.left + halfNodeWidth,
      };
      const event = new CustomEvent<Position>('position', {
        detail: edgePosition,
      });
      props.edgeRef.current.dispatchEvent(event);
    }
  });

  //side effect for centering position on initial render
  useEffect(() => {
    if (canvasRef.current && nodeRef.current) {
      const canvasWidth = canvasRef.current.offsetWidth;
      const canvasHeight = canvasRef.current.offsetHeight;
      setPosition({left: canvasWidth / 2, top: canvasHeight / 2});
    }
  }, [canvasRef, nodeRef, setPosition]);

  //the following is to handle boundries of canvas on screen resize (zooming)
  useEffect(() => {
    const handleWindowResize = () => {
      if (nodeRef.current !== null && canvasRef.current !== null) {
        const nodeWidth: number = +nodeRef.current.offsetWidth;
        const canvasWidth: number = +canvasRef.current.offsetWidth;
        const canvasHeight: number = +canvasRef.current.offsetHeight;

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
  }, [nodeRef, canvasRef, position]);

  return (
    <div>
      <Container
        isActive={props.isActive}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        position={position}
        ref={nodeRef}
        zoomPercentage={props.zoomPercentage}
      >
        {props.content}
        {props.children}
      </Container>
      <Information width={infoWidth} position={infoPosition}>
        <div>50</div>
        <div>60</div>
      </Information>
    </div>
  );
};

export default GraphNode;
