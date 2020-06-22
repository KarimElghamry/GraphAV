import styled from 'styled-components';
import Theme from '../../../models/Theme';

interface Props {
  theme: Theme;
}

const Thumb = styled.div<Props>`
  position: absolute;
  left: ${(props) => (props.theme.name === 'dark' ? '0' : 'calc(100% - 20px)')};
  height: 20px;
  width: 20px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.navbar.foreground};
  transition-duration: 0.3s;
`;

export default Thumb;
