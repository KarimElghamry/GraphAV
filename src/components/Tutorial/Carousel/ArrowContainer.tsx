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
    background-color: ${(props) =>
      props.theme.name === 'light'
        ? 'rgba(255, 255, 255, 0.9)'
        : 'rgba(0, 0, 0, 0.2)'};
  }
`;

export default ArrowContainer;
