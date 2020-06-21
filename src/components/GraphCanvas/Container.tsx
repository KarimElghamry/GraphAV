import styled from 'styled-components';
import {Theme} from '../../models/Theme';

interface Props {
  theme: Theme;
}

const Container = styled.div<Props>`
  height: calc(100vh - 50px);
  width: 100%;
  background-color: ${(props) => props.theme.canvas.background};
  transition-duration: 0.3s;
`;

export default Container;
