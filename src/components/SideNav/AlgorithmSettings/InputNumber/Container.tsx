import styled from 'styled-components';
import themes from '../../../../themes';

const Container = styled.input`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  font-family: 'Ramabhadra';
  width: 100px;
  height: 30px;
  border: none;
  color: white;
  background-color: ${(props) =>
    props.theme.name === 'dark'
      ? themes.light.navbar.background
      : themes.dark.navbar.background};

  transition-duration: 0.3s;
`;

export default Container;
