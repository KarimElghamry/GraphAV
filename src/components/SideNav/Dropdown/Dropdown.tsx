import React, {ReactElement} from 'react';
import Container from './Container';
import Arrow from './Arrow';

const Dropdown: React.FC = (): ReactElement => {
  return (
    <Container>
      <div style={{marginLeft: '12px'}}>DFS</div>
      <Arrow></Arrow>
    </Container>
  );
};

export default Dropdown;
