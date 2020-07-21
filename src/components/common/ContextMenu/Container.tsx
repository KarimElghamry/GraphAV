import styled, { keyframes } from 'styled-components';
import Position from '../../../models/Position';

interface Props {
  isVisible: boolean;
  position: Position;
  height: number;
  invertedTheme?: boolean;
}

const sizeAnim = keyframes`
from{
    height: 0px;
    width: 0px;
    font-size: 0px;
}
to{
    width: 200px;
    font-size: 16px;
}
`;

const Container = styled.div.attrs((props: Props) => ({
  style: {
    top: `${props.position.top}px`,
    left: `${props.position.left}px`,
    height: `${props.height}px`,
  },
})) <Props>`
  position: absolute;
  width: 200px;
  background-color: ${(props) => props.theme.nodeActive.background};
  border-radius: 5px;
  border: 2px solid ${(props) => props.invertedTheme ?
    props.theme.canvas.background :
    props.theme.edge.background};
  z-index: 2;
  cursor: pointer;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  animation: ${sizeAnim} 0.3s;
  user-select: none;
`;

export default Container;
