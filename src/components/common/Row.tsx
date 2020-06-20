import styled from 'styled-components';

interface Props {
  justifyContent: string;
  margin?: string;
}

const Row = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  margin: ${(props) => props.margin};
`;

export default Row;
