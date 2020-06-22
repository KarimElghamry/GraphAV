import styled from 'styled-components';

interface Props {
  isVisible: boolean;
}

const ToggleButton = styled.div.attrs((props: Props) => ({
  width: '30px',
  isVisible: props.isVisible ?? false,
}))`
  position: fixed;
  left: ${(props) =>
    props.isVisible ? `calc(250px - ${props.width} / 2)` : 0};
  top: 50%;
  z-index: 2;
  height: ${(props) => props.width};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.width};
  background-color: red;
  transition-duration: 0.3s;
`;

export default ToggleButton;
