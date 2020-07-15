import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  height: 100px;
  background: green;
  position: absolute;
  left: 100%;
  top: 0%;
  background-color: ${(props) => props.theme.nodeActive.background};
  border-radius: 0px 10px 10px 10px;
  border: 2px solid ${(props) => props.theme.edge.background};
`;

export default Container;
