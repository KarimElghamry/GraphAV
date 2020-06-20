import styled from 'styled-components';
import {Theme} from '../../../models/Theme';

interface Props {
  theme: Theme;
}

const Track = styled.div<Props>`
  position: relative;
  margin: 0 10px;
  border: ${(props) => `2px solid ${props.theme.navbar.foreground}`};
  width: 50px;
  height: 20px;
  border-radius: 20px;
`;

export default Track;
