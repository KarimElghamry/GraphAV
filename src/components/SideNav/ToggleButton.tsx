import styled from 'styled-components';

interface Props {
  isVisible: boolean;
}

const ToggleButton = styled.div.attrs((props: Props) => ({
  width: 18,
  isVisible: props.isVisible ?? false,
}))`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${(props) => (props.isVisible ? `250px` : `0px`)};
  top: 50%;
  z-index: 998;
  height: ${(props) => `${props.width * 2.1}px`};
  width: ${(props) => `${props.width}px`};
  border-radius: ${(props) => `${props.width}px`};
  background-color: ${(props) => props.theme.sidebar.background};
  transition-duration: 0.3s;
  cursor: pointer;

  border-radius: 0 ${(props) => `${props.width * 2.1}px`}
    ${(props) => `${props.width * 2}px`} 0;
`;

export default ToggleButton;
