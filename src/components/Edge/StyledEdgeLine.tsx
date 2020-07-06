import styled from 'styled-components';

interface Props {
  isVisited: boolean;
}

const StyledLink = styled.polyline<Props>`
  stroke: ${(props) => (props.isVisited ? 'red' : props.theme.edge.background)};
  stroke-width: 4px;
  transition-duration: 0.3s;
  position: absolute;
`;

export default StyledLink;
