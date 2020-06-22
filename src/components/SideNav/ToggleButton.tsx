import styled from 'styled-components';

const ToggleButton = styled.div.attrs({
  width: '25px',
})`
  position: fixed;
  left: 250px;
  top: 50%;
  z-index: 2;
  height: ${(props) => props.width};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.width};
  background-color: red;
`;

export default ToggleButton;
