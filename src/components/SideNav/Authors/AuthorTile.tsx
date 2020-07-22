import styled from 'styled-components';

const AuthorTile = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0px 8px 20px;
  color: white;
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.navbar.background};
  }
`;

export default AuthorTile;
