import styled from 'styled-components';
import themes from '../../../themes';

const Container = styled.div`
  margin: 5px 20px;
  width: 100%;
  height: 100px;
  background-color: ${(props) =>
    props.theme.name === 'dark'
      ? themes.light.navbar.background
      : themes.dark.navbar.background};
  border-radius: 5px;
  border: 2px solid white;
  transition-duration: 0.3s;
`;

export default Container;
