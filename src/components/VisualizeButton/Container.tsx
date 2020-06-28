import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  width: 100px;
  height: 20px;
  background-color: ${(props) => props.theme.navbar.background};
  color: white;
  transition-duration: 0.3s;
`;

export default Container;
