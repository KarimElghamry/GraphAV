import styled from 'styled-components';
import {Theme} from '../../models/Theme';

interface Props {
  theme: Theme;
}

const Container = styled.div<Props>`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.navbar.background};
  color: ${(props) => props.theme.navbar.foreground};
`;

export default Container;
