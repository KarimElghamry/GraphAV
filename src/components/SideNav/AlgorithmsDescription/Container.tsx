import styled from 'styled-components';
import themes from '../../../themes';

const Container = styled.div`
  font-size: 15px;
  margin: 4px 22px;
  width: 100%;
  height: 90px;
  background-color: ${(props) =>
    props.theme.name === 'dark'
      ? themes.light.navbar.background
      : themes.dark.navbar.background};
  border-radius: 5px;
  border: 2px solid white;
  transition-duration: 0.3s;
  text-align: center;
  padding: 3px;
  user-select: none;
  color: white;
`;

export default Container;
