import styled from 'styled-components';

const StyledLink = styled.polyline`
  stroke: ${(props) => props.theme.edge.background};
  stroke-width: 3px;
  transition-duration: 0.3s;
  position: absolute;
`;

export default StyledLink;
