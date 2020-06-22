import styled from 'styled-components';
import Theme from '../../../models/Theme';
import themes from '../../../themes';

interface Props {
  theme: Theme;
}

const Track = styled.div<Props>`
  position: relative;
  margin: 0 10px;
  width: 45px;
  height: 20px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.theme.name === 'dark'
      ? themes.light.navbar.background
      : themes.dark.navbar.background};

  transition-duration: 0.3s;
  transition-property: background-color;
  cursor: pointer;
`;

export default Track;
