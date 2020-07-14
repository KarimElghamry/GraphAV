import styled from 'styled-components';

interface Props {
  isVisited: boolean;
  isSelected: boolean;
}

const StyledLink = styled.polyline<Props>`
  stroke: ${(props) => (props.isVisited ? 'red' : props.theme.edge.background)};
  filter: drop-shadow(
    ${(props) =>
      props.isSelected
        ? `0px 0px 5px ${props.theme.nodeActive.background}`
        : 'none'}
  );
  stroke-width: 4px;
  transition-duration: 0.3s;
  position: absolute;
`;

export default StyledLink;
