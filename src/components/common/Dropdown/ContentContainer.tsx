import styled from 'styled-components';
import themes from '../../../themes';

interface Props {
  isVisible: boolean;
}

const ContentContainer = styled.div<Props>`
  z-index: 9999;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  top: 100%;
  width: 100%;
  max-height: ${(props) => (props.isVisible ? '135px' : '0px')};
  border-radius: 0px 0px 12px 12px;
  background-color: ${(props) =>
    props.theme.name === 'dark'
      ? themes.light.navbar.background
      : themes.dark.navbar.background};

  transition: max-height 0.2s, background-color 0.3s;
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

export default ContentContainer;
