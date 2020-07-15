import React, {ReactElement, useRef, useEffect} from 'react';
import Container from './Container';
import ContextTile from './ContextTile';
import Arrow from './Arrow';
import Position from '../../../models/Position';

interface Props {
  isVisible: boolean;
  setIsVisible: Function;
  position: Position;
  deleteNode: Function;
  canvasRef: React.RefObject<HTMLDivElement>;
}

const ContextMenu: React.FC<Props> = (props: Props): ReactElement => {
  const contextMenuRef = useRef<HTMLDivElement>(null);
  const canvasRef = props.canvasRef;
  const isVisible = props.isVisible;
  const setIsVisible = props.setIsVisible;
  const position = props.position;
  const contextWidth = 204;
  const contextHeight = 104;
  let isReversed = false;

  //TODO: remove magic number
  if (canvasRef.current) {
    if (position.left + contextWidth > canvasRef.current.offsetWidth) {
      position.left = canvasRef.current.offsetWidth - contextWidth;
    }

    if (position.top + contextHeight > canvasRef.current.offsetHeight) {
      position.top = canvasRef.current.offsetHeight - contextHeight;
    }
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!isVisible) return;
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(e.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isVisible, setIsVisible]);

  return (
    <React.Fragment>
      {isVisible ? (
        <Container
          ref={contextMenuRef}
          onDoubleClick={(e: React.MouseEvent) => e.stopPropagation()}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}
          onMouseUp={(e: React.MouseEvent) => e.stopPropagation()}
          isVisible={props.isVisible}
          position={props.position}
          isReversed={isReversed}
        >
          <ContextTile onClick={() => props.deleteNode()}>
            Delete node
          </ContextTile>
          <ContextTile>
            <div>Delete edge</div>
            <Arrow></Arrow>
          </ContextTile>
        </Container>
      ) : null}
    </React.Fragment>
  );
};

export default ContextMenu;
