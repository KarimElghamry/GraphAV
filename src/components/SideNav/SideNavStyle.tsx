import styled from 'styled-components';

interface Props {
  isVisible: boolean;
}

const StyledSideNav = styled.div<Props>`
  position: fixed;
  height: 100%;
  width: 250px;
  z-index: 2;
  left: ${(props) => (props.isVisible ? 0 : '-250px')};
  background-color: ${(props) => props.theme.sidebar.background};
  overflow-x: hidden;
  transition-duration: 0.3s;
  transition-property: background-color, left;

  scrollbar-color: white transparent;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
  }
  @media (max-width: 550px) {
    padding-top: 104px;
  }
`;

export default StyledSideNav;
