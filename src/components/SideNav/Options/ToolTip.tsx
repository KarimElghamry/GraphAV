import styled from 'styled-components';

interface Props {
  isVisible: boolean;
}

const ToolTip = styled.div<Props>`
  position: absolute;
  top: 110%;
  width: 100px;
  height: ${(props) => (props.isVisible ? '35px' : '0px')};
  color: white;
  background-color: black;
`;

export default ToolTip;
