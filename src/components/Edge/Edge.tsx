import React, {ReactElement, RefObject, useEffect, useState} from 'react';
import StyledEdgeLine from './StyledEdgeLine';
import Position from '../../models/Position';
import StyledEdgeContainer from './StyledEdgeContainer';
import StyledPolygon from './StyledPolygon';
import {v4 as uuidv4} from 'uuid';

interface EdgeProps {
  n1: RefObject<HTMLSpanElement>;
  n2: RefObject<HTMLSpanElement>;
  isDirected: boolean;
  isVisited: boolean;
  isSelected: boolean;
  zoomPercentage: number;
}

const Edge: React.FC<EdgeProps> = (props: EdgeProps): ReactElement => {
  const [position1, setPosition1] = useState<Position | null>(null);
  const [position2, setPosition2] = useState<Position | null>(null);
  const [currentN1, setCurrentN1] = useState<HTMLSpanElement | null>(
    props.n1.current
  );
  const [currentN2, setCurrentN2] = useState<HTMLSpanElement | null>(
    props.n2.current
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [markerId, _setMarkerId] = useState<string>(uuidv4());

  useEffect(() => {
    if (currentN1 === null) setCurrentN1(props.n1.current);
    if (currentN2 === null) setCurrentN2(props.n2.current);
  }, [props.n1, currentN1, setCurrentN1, props.n2, currentN2]);

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
        if (!props.n1.current && currentN1 !== null) {
          currentN1.removeEventListener('position', handler);
          return;
        }
        if (e?.detail) {
          const newPosition1: Position = e.detail;
          setPosition1(newPosition1);
        }
      };
      if (!position1) {
        setPosition1(initialPosition1);
      }
      props.n1.current.addEventListener('position', handler);

      return () => props.n1.current?.removeEventListener('position', handler);
    }
  }, [props.n1, position1, currentN1]);

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
        if (!props.n2.current && currentN2 !== null) {
          currentN2.removeEventListener('position', handler);
          return;
        }
        if (e?.detail) {
          const newPosition2: Position = e.detail;
          setPosition2(newPosition2);
        }
      };
      if (!position2) {
        setPosition2(initialPosition1);
      }
      props.n2.current.addEventListener('position', handler);
      return () => props.n2.current?.removeEventListener('position', handler);
    }
  }, [props.n2, position2, currentN2]);

  const pos1Top = position1 ? position1.top : 0;
  const pos2Top = position2 ? position2.top : 0;
  const pos1Left = position1 ? position1.left : 0;
  const pos2Left = position2 ? position2.left : 0;
  const arrowWidth = 10 * props.zoomPercentage;
  const arrowHeight = 7 * props.zoomPercentage;

  return (
    <StyledEdgeContainer
      height={Math.max(pos1Top, pos2Top) + arrowHeight * 2}
      width={Math.max(pos1Left, pos2Left) + arrowWidth * 2}
    >
      <defs>
        <marker
          orient="auto"
          id={markerId}
          markerWidth={arrowWidth}
          markerHeight={arrowHeight}
          refX={5}
          refY={arrowHeight / 2}
        >
          <StyledPolygon
            points={`0 0, ${arrowWidth} ${arrowHeight / 2}, 0 ${arrowHeight}`}
            isVisited={props.isVisited}
          />
        </marker>
      </defs>
      <StyledEdgeLine
        points={`${pos1Left},${pos1Top},${(pos1Left + pos2Left) / 2},${
          (pos1Top + pos2Top) / 2
        },${pos2Left},${pos2Top}`}
        isVisited={props.isVisited}
        isSelected={props.isSelected}
        onDoubleClick={() => console.log('eminem')}
        markerMid={props.isDirected ? `url(#${markerId})` : 'none'}
      />
      <polyline
        points={`${pos1Left},${pos1Top},${(pos1Left + pos2Left) / 2},${
          (pos1Top + pos2Top) / 2
        },${pos2Left},${pos2Top}`}
        strokeWidth="35px"
        stroke="transparent"
        style={{cursor: 'pointer'}}
        onDoubleClick={() => console.log('eminem')}
      />
    </StyledEdgeContainer>
  );
};

export default Edge;
