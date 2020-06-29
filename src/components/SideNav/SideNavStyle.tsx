import styled from 'styled-components';

interface Props {
  isVisible: boolean;
}

const StyledSideNav = styled.div<Props>`
  position: fixed;
  height: 100%;
  width: 250px;
  z-index: 1;
  left: ${(props) => (props.isVisible ? 0 : '-250px')};
  background-color: ${(props) => props.theme.sidebar.background};
  overflow-x: hidden;
  padding-top: 64px;
  transition-duration: 0.3s;
  transition-property: background-color, left;

  @media (max-width: 550px) {
    padding-top: 104px;
  }
`;

export default StyledSideNav;
