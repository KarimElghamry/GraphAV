import styled from 'styled-components';

const ContentTile = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 12px;
  color: white;
  transition-duration: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.navbar.background};
  }
`;

export default ContentTile;
