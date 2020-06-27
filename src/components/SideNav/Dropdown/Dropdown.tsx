import React, {ReactElement} from 'react';
import Container from './Container';
import Arrow from './Arrow';
import ContentContainer from './ContentContainer';

const Dropdown: React.FC = (): ReactElement => {
  return (
    <Container>
      <div style={{marginLeft: '12px'}}>DFS</div>
      <Arrow></Arrow>
      <ContentContainer isVisible={false}></ContentContainer>
    </Container>
  );
};

export default Dropdown;
