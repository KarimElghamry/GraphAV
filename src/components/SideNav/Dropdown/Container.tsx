import styled from 'styled-components';
import themes from '../../../themes';

const Container = styled.div.attrs({
  width: 130,
})`
  width: ${(props) => `${props.width}px`};
  height: 30px;
  border-radius: 9px;
  margin-left: calc(50% - ${(props) => `${props.width / 2}px`});
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: ${(props) =>
    props.theme.name === 'dark'
      ? themes.light.navbar.background
      : themes.dark.navbar.background};
`;

export default Container;
