import React, {ReactElement} from 'react';
import Container from './Container';
import Arrow from './Arrow';

const Dropdown: React.FC = (): ReactElement => {
  return (
    <Container>
      <Arrow></Arrow>
    </Container>
  );
};

export default Dropdown;
