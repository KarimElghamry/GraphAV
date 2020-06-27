import styled from 'styled-components';
import themes from '../../../themes';

const Container = styled.div`
  width: 100px;
  height: 35px;
  border-radius: 9px;
  background-color: ${(props) =>
    props.theme.name === 'dark'
      ? themes.light.navbar.background
      : themes.dark.navbar.background};
`;

export default Container;
