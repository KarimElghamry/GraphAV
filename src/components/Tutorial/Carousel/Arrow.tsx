import styled from 'styled-components';

interface Props {
  direction: 'left' | 'right';
}

const Arrow = styled.div<Props>`
  margin: 15px;
  border: solid black;
  border-width: 0 10px 10px 0;
  display: inline-block;
  padding: 10px;

  transform: rotate(
    ${(props) => (props.direction === 'left' ? '135deg' : '-45deg')}
  );

  -webkit-transform: rotate(
    ${(props) => (props.direction === 'left' ? '135deg' : '-45deg')}
  );
`;

export default Arrow;
