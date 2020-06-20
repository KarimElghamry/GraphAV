import styled from 'styled-components';

interface Props {
  justifyContent: string;
}

const Row = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
`;

export default Row;
