import styled from 'styled-components';

interface Props {
  isExpanded: boolean;
}

const Arrow = styled.div<Props>`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 10px solid white;
  margin-right: 12px;
  transition-duration: 0.3s;
  transform: ${(props) => (props.isExpanded ? 'rotate(180deg)' : 'none')};
`;

export default Arrow;
