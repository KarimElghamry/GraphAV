import styled from 'styled-components';

const StyledPolygon = styled.polygon`
  fill: ${(props) => props.theme.edge.background};
  transition-duration: 0.3s;
`;

export default StyledPolygon;
