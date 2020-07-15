import styled from 'styled-components';

const ContextTile = styled.div`
  width: 90%;
  height: 50px;
  padding-right: 5%;
  padding-left: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  color: ${(props) => props.theme.nodeInactive.foreground};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.nodeInactive.background};
  }
`;

export default ContextTile;
