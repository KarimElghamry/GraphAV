import React, { ReactElement, useRef, useEffect } from 'react';
import Container from './Container';
import Position from '../../../models/Position';

interface Props {
  isVisible: boolean;
  setIsVisible: Function;
  position: Position;
  canvasRef: React.RefObject<HTMLDivElement>;
  children: Array<ReactElement>;
  invertedTheme?: boolean
}

const ContextMenu: React.FC<Props> = (props: Props): ReactElement => {
  const contextMenuRef = useRef<HTMLDivElement>(null);
  const canvasRef = props.canvasRef;
  const isVisible = props.isVisible;
  const setIsVisible = props.setIsVisible;
  const position = props.position;
  const contextWidth = 204;
  const contextHeight = props.children.length * 40 + 4;

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

  useEffect(() => {
    const windowResizeHandler = () => {
      setIsVisible(false);
    };

    window.addEventListener('resize', windowResizeHandler);
    return () => window.removeEventListener('resize', windowResizeHandler);
  });

  return (
    <React.Fragment>
      {isVisible ? (
        <Container
          height={contextHeight - 4}
          ref={contextMenuRef}
          onDoubleClick={(e: React.MouseEvent) => e.stopPropagation()}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}
          onMouseUp={(e: React.MouseEvent) => e.stopPropagation()}
          onContextMenu={(e: React.MouseEvent) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          isVisible={props.isVisible}
          position={props.position}
          invertedTheme={props.invertedTheme}
        >
          {props.children}
        </Container>
      ) : null}
    </React.Fragment>
  );
};

export default ContextMenu;
