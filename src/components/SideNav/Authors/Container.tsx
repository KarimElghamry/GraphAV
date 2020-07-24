import styled from 'styled-components';
import themes from '../../../themes';

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.name === 'dark'
      ? themes.light.navbar.background
      : themes.dark.navbar.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid ${(props) => props.theme.sidebar.background};
  margin-top: 40px;
  user-select: none;
  transition-duration: 0.3s;
`;

export default Container;
