import styled from 'styled-components';

interface Props {
  isVisited: boolean;
}

const StyledPolygon = styled.polygon<Props>`
  fill: ${(props) =>
    props.isVisited
      ? props.theme.nodeActive.background
      : props.theme.edge.background};
  transition-duration: 0.3s;
`;

export default StyledPolygon;
