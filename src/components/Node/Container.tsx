import styled from 'styled-components';
import {Theme} from '../../models/Theme';

interface Props {
  theme: Theme;
  isActive: boolean;
}

const Container = styled.div<Props>`
  position: absolute;
  height: 88px;
  width: 88px;
  left: calc(50% - 44px);
  top: calc(50% - 44px);
  background-color: ${(props) =>
    props.isActive
      ? props.theme.nodeActive.background
      : props.theme.nodeInactive.background};

  color: ${(props) =>
    props.isActive
      ? props.theme.nodeActive.foreground
      : props.theme.nodeInactive.foreground};

  border-radius: 88px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.edge};
`;

export default Container;
