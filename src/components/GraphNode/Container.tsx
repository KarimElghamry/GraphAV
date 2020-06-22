import styled from 'styled-components';
import Theme from '../../models/Theme';
import Position from '../../models/Position';

interface Props {
  theme: Theme;
  isActive: boolean;
  position: Position;
}

const Container = styled.div.attrs((props: Props) => ({
  style: {
    top: `${props.position.top}px`,
    left: `${props.position.left}px`,
  },
}))<Props>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  height: 88px;
  width: 88px;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.isActive
      ? props.theme.nodeActive.background
      : props.theme.nodeInactive.background};

  color: ${(props) =>
    props.isActive
      ? props.theme.nodeActive.foreground
      : props.theme.nodeInactive.foreground};

  border-radius: 88px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.edge.background};
  transition-duration: 0.3s;
  transition-property: background-color, border;
  user-select: none;
  cursor: move;
`;

export default Container;
