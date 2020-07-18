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
import ContextMenu from '../common/ContextMenu/ContextMenu';
import ContextTile from '../common/ContextMenu/ContextTile';
import DeleteEdgeTile from './DeleteEdgeTile';
import AddEdgeTile from './AddEdgeTile';

interface Props {
  isActive: boolean;
  nodeIndex: number;
  initialPosition?: Position;
  canvasRef: React.RefObject<HTMLDivElement>;
  children: React.ReactChild | React.ReactChildren;
  edgeRef: React.RefObject<HTMLSpanElement> | null;
  zoomPercentage: number;
  nodeInfo: NodeInfo;
  adjacencyList: Array<Array<number>>;
  onDelete: Function;
  onEdgeDelete: Function;
  onEdgeAdd: (secondNode: number, isDirected: boolean) => void;
}

const GraphNode: React.FC<Props> = (props: Props): ReactElement => {
  const initialPosition = props.initialPosition;
  const [position, setPosition] = useState<Position>(
    initialPosition ?? {top: 100, left: 100}
  );
  const [isContextMenuVisible, setIsContextMenuVisible] = useState<boolean>(
    false
  );
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
    if (position.top !== -100) return;
    if (canvasRef.current && nodeRef.current) {
      const canvasWidth = canvasRef.current.offsetWidth;
      const canvasHeight = canvasRef.current.offsetHeight;
      const nodeWidth: number = +nodeRef.current.offsetWidth;
      setPosition({
        left: (canvasWidth - nodeWidth) / 2,
        top: (canvasHeight - nodeWidth) / 2,
      });
    }
  }, [canvasRef, nodeRef, setPosition, position]);

  const contextMenuPosition: Position = {
    top: position.top + (nodeRef.current?.offsetHeight ?? 0) / 2,
    left: position.left + (nodeRef.current?.offsetWidth ?? 0) / 2,
  };

  return (
    <React.Fragment>
      <Container
        onContextMenu={(e: React.MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
          setIsContextMenuVisible((prev) => !prev);
        }}
        isActive={props.isActive}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        position={position}
        ref={nodeRef}
        zoomPercentage={props.zoomPercentage}
      >
        {(props.nodeIndex + 1).toString()}
        {props.children}
        <Information ref={infoRef} zoomPercentage={props.zoomPercentage}>
          <div>
            {'SP: ' +
              (props.nodeInfo.shortestPath === undefined
                ? '∞'
                : props.nodeInfo.shortestPath)}
          </div>
          <div>
            {'PREV: ' +
              (props.nodeInfo.previousNode === undefined
                ? '∞'
                : props.nodeInfo.previousNode + 1)}
          </div>
        </Information>
      </Container>
      <ContextMenu
        canvasRef={canvasRef}
        position={contextMenuPosition}
        isVisible={isContextMenuVisible}
        setIsVisible={setIsContextMenuVisible}
      >
        <ContextTile onClick={() => props.onDelete()}>Delete node</ContextTile>
        <DeleteEdgeTile
          onEdgeDelete={props.onEdgeDelete}
          neighbours={props.adjacencyList[props.nodeIndex]}
          canvasRef={canvasRef}
        ></DeleteEdgeTile>
        <AddEdgeTile
          adjacencyList={props.adjacencyList}
          nodeIndex={props.nodeIndex}
          canvasRef={canvasRef}
          isDirected={false}
          onAdd={props.onEdgeAdd}
        ></AddEdgeTile>
      </ContextMenu>
    </React.Fragment>
  );
};

export default GraphNode;
