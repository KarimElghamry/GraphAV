import styled from 'styled-components';
import Theme from '../../models/Theme';

interface Props {
  theme: Theme;
}

const Container = styled.div<Props>`
  position: relative;
  height: calc(100vh - 50px);
  width: 100vw;
  max-width: 100%;
  max-height: 100%;
  background-color: ${(props) => props.theme.canvas.background};
  transition-duration: 0.3s;
  transition-property: background-color;

  @media (max-width: 550px) {
    height: calc(100vh - 90px);
  }
`;

export default Container;
