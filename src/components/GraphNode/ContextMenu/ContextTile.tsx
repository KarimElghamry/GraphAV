import styled from 'styled-components';

const ContextTile = styled.div`
  font-size: 20px;
  width: 90%;
  height: 50px;
  padding-right: 5%;
  padding-left: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.nodeInactive.foreground};
  transition: background-color 0.3s;
  overflow: hidden;

  &:hover {
    background-color: ${(props) => props.theme.nodeInactive.background};
  }
`;

export default ContextTile;
