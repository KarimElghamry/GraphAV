import styled from 'styled-components';

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 10px solid white;
  transition-duration: 0.3s;
  transform: rotate(-90deg);
`;

export default Arrow;
