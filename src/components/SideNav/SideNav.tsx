import React, {ReactElement, useState} from 'react';
import StyledSideNav from './SideNavStyle';
import ZoomSlider from './ZoomSlider';
import ItemText from './ItemText';
import ToggleButton from './ToggleButton';

const SideNav: React.FC = (): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <StyledSideNav>
      <ToggleButton
        isVisible={isVisible}
        onClick={() => toggleVisibility()}
      ></ToggleButton>
      <ItemText>Zoom</ItemText>
      <ZoomSlider>
        <input type="range" className="slider" />
      </ZoomSlider>
    </StyledSideNav>
  );
};

export default SideNav;
