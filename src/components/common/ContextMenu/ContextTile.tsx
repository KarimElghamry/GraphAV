import styled from 'styled-components';

interface Props {
  clickable?: boolean;
}

const ContextTile = styled.div<Props>`
  width: 90%;
  height: 40px;
  padding-right: 5%;
  padding-left: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  color: ${(props) => props.theme.nodeInactive.foreground};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.clickable === false ? 'transparent' : props.theme.nodeInactive.background};
  }
`;

export default ContextTile;
