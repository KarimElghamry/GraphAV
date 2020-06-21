import React, { ReactElement } from 'react';
import StyledSideNav from "./SideNavStyle"
import ZoomSlider from "./ZoomSlider"

const SideNav: React.FC = (): ReactElement => {
    return (
        <StyledSideNav>
            <ZoomSlider>
                <input type="range" className="slider" />
            </ZoomSlider>
        </StyledSideNav>
    );
};

export default SideNav;

