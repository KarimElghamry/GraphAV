import styled from "styled-components";
const StyledSideNav = styled.div`
  position: fixed;    
  height: 100%;
  width: 250px;
  z-index: 1;
  background-color: ${(props) => props.theme.sidebar.background};
  overflow-x: hidden;
  padding-top: 10px;
  transition-duration: 0.3s;
  transition-property: background-color;
`;

export default StyledSideNav