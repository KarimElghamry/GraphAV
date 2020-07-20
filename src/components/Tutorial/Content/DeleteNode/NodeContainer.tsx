import styled from 'styled-components';
import Position from '../../../../models/Position';

interface Props {
    position: Position;
}

const Container = styled.div.attrs((props: Props) => ({
    style: {
        top: `${props.position.top}px`,
        left: `${props.position.left}px`,
    },
})) <Props>`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  height: 88px;
  width: 88px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.nodeInactive.background};
  color: white;

  border-radius: 88px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.sidebar.foreground};
  transition-duration: 0.3s;
  transition-property: background-color, border;
  user-select: none;
  cursor: move;
`;

export default Container;
