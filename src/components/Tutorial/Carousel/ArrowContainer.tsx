import styled from 'styled-components';

interface Props {
  direction: 'left' | 'right';
}

const ArrowContainer = styled.div<Props>`
  height: 100%;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s;
  border-radius: ${(props) =>
    props.direction === 'left' ? '7.5px 0px 0px 7.5px' : '0px 7.5px 7.5px 0px'};

  &:hover {
    background-color: white;
  }
`;

export default ArrowContainer;
