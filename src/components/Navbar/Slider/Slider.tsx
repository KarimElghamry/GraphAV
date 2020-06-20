import React, {ReactElement} from 'react';
import Track from './Track';
import Thumb from './Thumb';

const Slider: React.FC = (): ReactElement => {
  return (
    <Track>
      <Thumb></Thumb>
    </Track>
  );
};

export default Slider;
