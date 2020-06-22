import styled from 'styled-components';

interface Props {
  isVisible: boolean;
}

const ToggleButton = styled.div.attrs((props: Props) => ({
  width: 30,
  isVisible: props.isVisible ?? false,
}))`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${(props) =>
    props.isVisible
      ? `calc(250px - ${props.width}px / 2)`
      : `-${props.width / 2}px`};
  top: 50%;
  z-index: 2;
  height: ${(props) => `${props.width}px`};
  width: ${(props) => `${props.width}px`};
  border-radius: ${(props) => `${props.width}px`};
  background-color: ${(props) => props.theme.sidebar.background};
  transition-duration: 0.3s;
  cursor: pointer;
`;

export default ToggleButton;
