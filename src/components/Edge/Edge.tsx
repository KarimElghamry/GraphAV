import React, {ReactElement, RefObject, useEffect, useState} from 'react';
import StyledEdgeLine from './StyledEdgeLine';
import Position from '../../models/Position';
import StyledEdgeContainer from './StyledEdgeContainer';
import StyledPolygon from './StyledPolygon';

interface EdgeProps {
  n1: RefObject<HTMLSpanElement>;
  n2: RefObject<HTMLSpanElement>;
}

const Edge: React.FC<EdgeProps> = (props: EdgeProps): ReactElement => {
  const [position1, setPosition1] = useState<Position | null>(null);
  const [position2, setPosition2] = useState<Position | null>(null);

  useEffect(() => {
    if (props.n1.current && props.n1.current.parentElement) {
      const initialTop: number = +props.n1.current.parentElement.style.top.replace(
        'px',
        ''
      );
      const initialLeft: number = +props.n1.current.parentElement.style.left.replace(
        'px',
        ''
      );
      const nodeRadius: number = props.n1.current.parentElement.offsetWidth / 2;
      const initialPosition1: Position = {
        top: initialTop + nodeRadius,
        left: initialLeft + nodeRadius,
      };
      const handler = (e: CustomEventInit<Position>) => {
        if (e?.detail) {
          const newPosition1: Position = e.detail;
          setPosition1(newPosition1);
        }
      };
      props.n1.current.addEventListener('position', handler);
      if (!position1) {
        setPosition1(initialPosition1);
      }
      return () => props.n1.current?.removeEventListener('position', handler);
    }
  }, [props.n1, position1]);

  useEffect(() => {
    if (props.n2.current && props.n2.current.parentElement) {
      const initialTop: number = +props.n2.current.parentElement.style.top.replace(
        'px',
        ''
      );
      const initialLeft: number = +props.n2.current.parentElement.style.left.replace(
        'px',
        ''
      );
      const nodeRadius: number = props.n2.current.parentElement.offsetWidth / 2;
      const initialPosition1: Position = {
        top: initialTop + nodeRadius,
        left: initialLeft + nodeRadius,
      };
      const handler = (e: CustomEventInit<Position>) => {
        if (e?.detail) {
          const newPosition2: Position = e.detail;
          setPosition2(newPosition2);
        }
      };
      props.n2.current.addEventListener('position', handler);
      if (!position2) {
        setPosition2(initialPosition1);
      }
      return () => props.n2.current?.removeEventListener('position', handler);
    }
  }, [props.n2, position2]);

  const pos1Top = position1 ? position1.top : 0;
  const pos2Top = position2 ? position2.top : 0;
  const pos1Left = position1 ? position1.left : 0;
  const pos2Left = position2 ? position2.left : 0;

  return (
    <StyledEdgeContainer
      height={Math.max(
        position1 ? position1.top + 10 : 0,
        position2 ? position2.top + 10 : 0
      )}
      width={Math.max(
        position1 ? position1.left + 10 : 0,
        position2 ? position2.left + 10 : 0
      )}
    >
      <defs>
        <marker
          orient="auto"
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX={5}
          refY={3.5}
        >
          <StyledPolygon points="0 0, 10 3.5, 0 7" />
        </marker>
      </defs>
      <StyledEdgeLine
        points={`${pos1Left},${pos1Top},${(pos1Left + pos2Left) / 2},${
          (pos1Top + pos2Top) / 2
        },${pos2Left},${pos2Top}`}
        markerMid="url(#arrowhead)"
      />
    </StyledEdgeContainer>
  );
};

export default Edge;
