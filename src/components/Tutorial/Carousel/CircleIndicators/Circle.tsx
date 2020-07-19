import styled from 'styled-components';
import themes from '../../../../themes';

interface Props {
  isSelected: boolean;
}

const Circle = styled.div<Props>`
  height: 10px;
  width: 10px;
  border-radius: 10px;
  margin: 5px;
  background-color: ${(props) =>
    props.isSelected
      ? props.theme.name === 'dark'
        ? themes.light.navbar.background
        : themes.dark.navbar.background
      : props.theme.name === 'dark'
      ? '#C4C4C4'
      : 'white'};
  cursor: pointer;
  transition: background-color 0.3s;
`;

export default Circle;
