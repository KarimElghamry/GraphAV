import React, {
  ReactElement,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import Container from './Container';
import Position from '../../models/Position';
import Information from './Information';
import NodeInfo from '../../models/NodeInfo';

interface Props {
  isActive: boolean;
  content: string;
  canvasRef: React.RefObject<HTMLDivElement>;
  children: React.ReactChild | React.ReactChildren;
  edgeRef: React.RefObject<HTMLSpanElement> | null;
  zoomPercentage: number;
  connectNode: VoidFunction;
  nodeInfo: NodeInfo;
}

const GraphNode: React.FC<Props> = (props: Props): ReactElement => {
  const [position, setPosition] = useState<Position>({top: 100, left: 100});
  const nodeRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const infoRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const canvasRef: React.RefObject<HTMLDivElement> = props.canvasRef;

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (
        nodeRef.current !== null &&
        canvasRef.current !== null &&
        infoRef.current !== null
      ) {
        const nodeWidth: number = +nodeRef.current.offsetWidth;
        const canvasWidth: number = +canvasRef.current.offsetWidth;
        const canvasHeight: number = +canvasRef.current.offsetHeight;
        const navbarHeight: number = canvasWidth < 700 ? 90 : 50;
        const infoBoxHeight: number = +infoRef.current.offsetHeight;

        let newLeft: number = e.clientX - nodeWidth / 2;
        let newTop: number = e.clientY - navbarHeight - nodeWidth / 2;

        if (e.clientX - nodeWidth / 2 <= 0) {
          newLeft = 0;
        } else if (e.clientX - nodeWidth / 2 >= canvasWidth - nodeWidth) {
          newLeft = canvasWidth - nodeWidth;
        }

        if (e.clientY - navbarHeight - nodeWidth / 2 <= 0) {
          newTop = 0;
        } else if (
          e.clientY - navbarHeight - nodeWidth / 2 >=
          canvasHeight - nodeWidth - infoBoxHeight
        ) {
          newTop = canvasHeight - nodeWidth - infoBoxHeight;
        }

        setPosition({
          top: newTop,
          left: newLeft,
        });
      }
    },
    [canvasRef]
  );

  const handleMouseDown = () => {
    document.onmousemove = handleMouseMove;
    document.onmouseup = handleMouseUp;
    props.connectNode();
  };
  const handleMouseUp = () => {
    document.onmousemove = null;
  };

  //side effect for fire node position to connected edges
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

  //the following is to handle boundries of canvas on screen resize (zooming)
  useEffect(() => {
    const handleWindowResize = () => {
      if (
        nodeRef.current !== null &&
        canvasRef.current !== null &&
        infoRef.current !== null
      ) {
        const nodeWidth: number = +nodeRef.current.offsetWidth;
        const canvasWidth: number = +canvasRef.current.offsetWidth;
        const canvasHeight: number = +canvasRef.current.offsetHeight;
        const infoBoxHeight: number = +infoRef.current.offsetHeight;

        let newLeft: number = position.left;
        let newTop: number = position.top;

        if (position.left - nodeWidth <= 0) {
          newLeft = 0;
        } else if (position.left + nodeWidth >= canvasWidth) {
          newLeft = canvasWidth - nodeWidth;
        }

        if (position.top <= 0) {
          newTop = 0;
        } else if (position.top >= canvasHeight - nodeWidth - infoBoxHeight) {
          newTop = canvasHeight - nodeWidth - infoBoxHeight;
        }

        setPosition({
          top: newTop,
          left: newLeft,
        });
      }
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [nodeRef, canvasRef, position, infoRef]);

  //side effect for handling out of boundries when zooming in and out
  useEffect(() => {
    const event = new CustomEvent<Position>('resize', {});
    window.dispatchEvent(event);
  }, [props.zoomPercentage]);

  //side effect for centering position on initial render
  useEffect(() => {
    if (canvasRef.current && nodeRef.current) {
      const canvasWidth = canvasRef.current.offsetWidth;
      const canvasHeight = canvasRef.current.offsetHeight;
      const nodeWidth: number = +nodeRef.current.offsetWidth;
      setPosition({
        left: (canvasWidth - nodeWidth) / 2,
        top: (canvasHeight - nodeWidth) / 2,
      });
    }
  }, [canvasRef, nodeRef, setPosition]);

  return (
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
      <Information ref={infoRef} zoomPercentage={props.zoomPercentage}>
        <div>SP: 100</div>
        <div>prev: 1</div>
      </Information>
    </Container>
  );
};

export default GraphNode;
