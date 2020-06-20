import styled from 'styled-components';
import {Theme} from '../../../models/Theme';

interface Props {
  theme: Theme;
  type?: string;
}

const Thumb = styled.div<Props>`
  position: absolute;
  left: ${(props) => (props.type === 'dark' ? '0' : 'none')};
  right: ${(props) => (props.type === 'dark' ? 'none' : '0')};
  height: 20px;
  width: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.navbar.foreground};
  transition-duration: 0.5s;
`;

export default Thumb;
