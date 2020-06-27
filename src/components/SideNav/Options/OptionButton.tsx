import styled from 'styled-components';
import themes from '../../../themes';

const OptionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 45px;
  background-color: ${(props) =>
    props.theme.name === 'dark'
      ? themes.light.navbar.background
      : themes.dark.navbar.background};
  transition: background-color 0.3s;
  cursor: pointer;
`;

export default OptionButton;
