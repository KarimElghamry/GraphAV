import styled from 'styled-components';

interface Props {
  isVisible: boolean;
}

const ToggleButton = styled.div.attrs((props: Props) => ({
  width: '30px',
  isVisible: props.isVisible,
}))`
  position: fixed;
  left: calc(250px - ${(props) => props.width} / 2);
  top: 50%;
  z-index: 2;
  height: ${(props) => props.width};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.width};
  background-color: red;
`;

export default ToggleButton;
