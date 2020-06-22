import React, {ReactElement, useState} from 'react';
import StyledSideNav from './SideNavStyle';
import ZoomSlider from './ZoomSlider';
import ItemText from './ItemText';

const SideNav: React.FC = (): ReactElement => {
  const [isVisible, setIsVisible] = useState<Boolean>();

  return (
    <StyledSideNav>
      <ItemText>Zoom</ItemText>
      <ZoomSlider>
        <input type="range" className="slider" />
      </ZoomSlider>
    </StyledSideNav>
  );
};

export default SideNav;
