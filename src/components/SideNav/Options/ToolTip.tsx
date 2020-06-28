import styled from 'styled-components';
import themes from '../../../themes';

interface Props {
  isVisible: boolean;
}

const ToolTip = styled.div<Props>`
  z-index: 999;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  position: absolute;
  text-align: center;
  top: 115%;
  min-width: 80px;
  padding: 2px;
  border-radius: 6px;
  color: white;
  background-color: ${(props) =>
    props.theme.name === 'dark'
      ? themes.light.navbar.background
      : themes.dark.navbar.background};
  transition-duration: 0.3s;

  &::after {
    content: ' ';
    position: absolute;
    top: -10px;
    left: 50%;
    margin-left: -5px;
    border-width: ${(props) => (props.isVisible ? '5px' : '0px')};
    border-style: solid;
    border-color: transparent transparent
      ${(props) =>
        props.theme.name === 'dark'
          ? themes.light.navbar.background
          : themes.dark.navbar.background}
      transparent;
  }
`;

export default ToolTip;
