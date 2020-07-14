import styled from 'styled-components';

const ContextTile = styled.div`
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.nodeInactive.foreground};
`;

export default ContextTile;
