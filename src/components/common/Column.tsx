import styled from 'styled-components';

interface Props {
  width: string;
}

const Column = styled.div<Props>`
  height: 100%;
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Column;
