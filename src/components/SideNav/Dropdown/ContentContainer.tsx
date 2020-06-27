import styled from 'styled-components';
import themes from '../../../themes';

interface Props {
  isVisible: boolean;
}

const ContentContainer = styled.div<Props>`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  top: 100%;
  width: 110px;
  height: 200px;
  background-color: ${(props) =>
    props.theme.name === 'dark'
      ? themes.light.navbar.background
      : themes.dark.navbar.background};

  transition-duration: 0.3s;
  transition-property: background-color;

  scrollbar-color: white transparent;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 5px;
  }
`;

export default ContentContainer;
