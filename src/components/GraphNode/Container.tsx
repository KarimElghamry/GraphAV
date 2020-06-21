import styled from 'styled-components';
import {Theme} from '../../models/Theme';

interface Position {
  top: number;
  left: number;
}

interface Props {
  theme: Theme;
  isActive: boolean;
}

const Container = styled.div<Props>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  height: 88px;
  width: 88px;
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
  border-color: ${(props) => props.theme.edge.background};
  user-select: none;
  cursor: move;
`;

export default Container;
