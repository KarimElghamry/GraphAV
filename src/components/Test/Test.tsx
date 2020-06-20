import React, {ReactElement} from 'react';
import styled from 'styled-components';

interface Props {
  toggleTheme: Function;
}

const Container = styled.div`
  background-color: ${(props) => props.theme.navbar.background};
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Test: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <Container>
      <button
        onClick={() =>
          props.toggleTheme((prev: string) =>
            prev === 'dark' ? 'light' : 'dark'
          )
        }
      >
        toggle
      </button>
    </Container>
  );
};

export default Test;
