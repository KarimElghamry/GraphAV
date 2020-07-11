import styled from 'styled-components';

interface Props {
  zoomPercentage: number;
}

const Information = styled.div<Props>`
  font-size: ${(props) => `${props.zoomPercentage * 17}px`};
  font-weight: lighter;
  color: ${(props) => props.theme.sidebar.background};
  position: absolute;
  top: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  pointer-events: none;
  margin-top: 2px;
  transition: 0.3s color;
`;

export default Information;
