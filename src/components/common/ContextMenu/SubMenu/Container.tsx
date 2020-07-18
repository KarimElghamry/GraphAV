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
    width: 200px;;
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
  border-radius: ${(props) =>
    props.isXReversed ? '5px 0px 5px 5px' : '0px 5px 5px 5px'};
  border: 2px solid ${(props) => props.theme.edge.background};
  user-select: none;
  animation: ${sizeAnim} 0.3s;
  overflow-y: scroll;
  scrollbar-color: white transparent;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
  }
`;

export default Container;
