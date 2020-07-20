import styled from 'styled-components';
import themes from '../../themes';

const ClearButton = styled.div`
  background-color: ${(props) =>
    props.theme.name === 'dark'
      ? themes.light.navbar.background
      : themes.dark.navbar.background};
  color: white;
  height: 30px;
  width: 180px;
  font-size: 18px;
  margin: 10px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    background-color: red;
  }
`;

export default ClearButton;
