import styled from 'styled-components';

interface Props {
  isVisible: boolean;
}

const Arrow = styled.div<Props>`
  border: solid ${(props) => props.theme.sidebar.foreground};
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 4px;
  margin-left: 6px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

export default Arrow;
