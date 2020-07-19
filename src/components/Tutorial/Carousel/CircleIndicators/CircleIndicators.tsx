import React, {ReactElement} from 'react';
import Circle from './Circle';

interface Props {
  circlesCount: number;
  selected: number;
  onCircleSelect: (index: number) => void;
}

const CircleIndicators: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <React.Fragment>
      {[...Array(props.circlesCount)].map((_, index: number) => {
        return (
          <Circle
            key={index}
            isSelected={index === props.selected}
            onClick={() => props.onCircleSelect(index)}
          ></Circle>
        );
      })}
    </React.Fragment>
  );
};

export default CircleIndicators;
