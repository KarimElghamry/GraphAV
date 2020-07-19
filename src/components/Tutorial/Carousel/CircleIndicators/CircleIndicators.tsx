import React, {ReactElement} from 'react';
import Circle from './Circle';

interface Props {
  circlesCount: number;
  selected: number;
}

const CircleIndicators: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <React.Fragment>
      {Array(props.circlesCount).map((_, index: number) => (
        <Circle></Circle>
      ))}
    </React.Fragment>
  );
};

export default CircleIndicators;
