import React, {ReactElement, useState} from 'react';
import StyledSideNav from './SideNavStyle';
import ZoomSlider from './ZoomSlider';
import ItemText from './ItemText';
import ToggleButton from './ToggleButton';
import Arrow from './Arrow';
import Dropdown from './Dropdown/Dropdown';

const SideNav: React.FC = (): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <StyledSideNav isVisible={isVisible}>
      <ToggleButton isVisible={isVisible} onClick={() => toggleVisibility()}>
        <Arrow isVisible={isVisible}></Arrow>
      </ToggleButton>
      <ItemText>Zoom</ItemText>
      <ZoomSlider>
        <input type="range" className="slider" />
      </ZoomSlider>
      <ItemText>Algorithm</ItemText>
      <Dropdown></Dropdown>
    </StyledSideNav>
  );
};

export default SideNav;
