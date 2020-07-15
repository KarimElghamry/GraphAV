import styled, {keyframes} from 'styled-components';
interface Props {
  isXReversed: boolean;
  isYReversed: boolean;
}

const sizeAnim = keyframes`
from{
    max-height: 0px;
    width: 0px;
    font-size: 0px;
}
to{
    max-height: 100px;
    width: 200px;
    font-size: 20px;
}
`;

const Container = styled.div<Props>`
  width: 200px;
  max-height: 100px;
  background: green;
  position: absolute;
  ${(props) => (props.isXReversed ? 'right:100%' : 'left:100%')};
  ${(props) => (props.isYReversed ? 'bottom:0%' : 'top:0%')};
  background-color: ${(props) => props.theme.nodeActive.background};
  border-radius: 0px 5px 5px 5px;
  border: 2px solid ${(props) => props.theme.edge.background};
  animation: ${sizeAnim} 0.1s;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

export default Container;
