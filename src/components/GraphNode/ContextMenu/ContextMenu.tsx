import React, {ReactElement, useRef, useEffect} from 'react';
import Container from './Container';
import ContextTile from './ContextTile';
import Arrow from './Arrow';

interface Props {
  isVisible: boolean;
  setIsVisible: Function;
}

const ContextMenu: React.FC<Props> = (props: Props): ReactElement => {
  const contextMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!props.isVisible) return;
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(e.target as Node)
      ) {
        props.setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [props]);

  return (
    <Container
      ref={contextMenuRef}
      onDoubleClick={(e: React.MouseEvent) => e.stopPropagation()}
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
      onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}
      onMouseUp={(e: React.MouseEvent) => e.stopPropagation()}
      isVisible={props.isVisible}
    >
      <ContextTile>Delete node</ContextTile>
      <ContextTile>
        <div>Delete edge</div>
        <Arrow></Arrow>
      </ContextTile>
    </Container>
  );
};

export default ContextMenu;
