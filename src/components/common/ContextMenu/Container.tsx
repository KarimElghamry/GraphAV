import styled, {keyframes} from 'styled-components';
import Position from '../../../models/Position';

interface Props {
  isVisible: boolean;
  position: Position;
}

const sizeAnim = keyframes`
from{
    height: 0px;
    width: 0px;
    font-size: 0px;
}
to{
    height: 100px;
    width: 200px;
    font-size: 20px;
}
`;

const Container = styled.div.attrs((props: Props) => ({
  style: {
    top: `${props.position.top}px`,
    left: `${props.position.left}px`,
  },
}))<Props>`
  position: absolute;
  height: 100px;
  width: 200px;
  background-color: ${(props) => props.theme.nodeActive.background};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.edge.background};
  z-index: 2;
  cursor: pointer;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  animation: ${sizeAnim} 0.3s;
`;

export default Container;