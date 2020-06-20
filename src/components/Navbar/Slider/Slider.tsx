import React, {ReactElement} from 'react';
import Track from './Track';
import Thumb from './Thumb';

interface SliderProps {
  changeTheme: Function;
}

const Slider: React.FC<SliderProps> = (props: SliderProps): ReactElement => {
  return (
    <Track>
      <Thumb></Thumb>
    </Track>
  );
};

export default Slider;
