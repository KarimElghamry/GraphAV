import styled from 'styled-components';

const Container = styled.div`
  z-index: 999;
  position: fixed;
  left: calc(100% - 150px - 20px);
  top: calc(100% - 30px - 20px);
  display: flex;
  justify-content: center;
  font-size: 22px;
  align-items: center;
  width: 150px;
  height: 30px;
  border-radius: 6px;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.navbar.background};
  color: white;
  transition-duration: 0.3s;
  user-select: none;
  cursor: pointer;

  &:hover {
    letter-spacing: 3px;
    width: 160px;
    left: calc(100% - 155px - 20px);
  }
`;

export default Container;
