import React, {ReactElement, useState, useEffect, useRef} from 'react';
import Container from './Container';

interface Props {
  isActive: boolean;
  content: string;
}

interface Position {
  top: number;
  left: number;
}

const GraphNode: React.FC<Props> = (props: Props): ReactElement => {
  const [isDragged, setIsDragged] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({top: 0, left: 0});
  const myRef = useRef<HTMLDivElement>(null);
  const handleMouseDown = () => {
    setIsDragged(true);
  };
  const handleMouseUp = () => {
    setIsDragged(false);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragged) {
      setPosition({
        top: position.top + e.movementY,
        left: position.left + e.movementX,
      });
    }
  };

  useEffect(() => {
    if (myRef.current) {
      myRef.current.style.transform = `translate(${position.left}px, ${position.top}px)`;
    }
  }, [position]);

  return (
    <Container
      ref={myRef}
      isActive={props.isActive}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {props.content}
    </Container>
  );
};

export default GraphNode;
