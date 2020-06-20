import React, {ReactElement} from 'react';
import Container from './Container';
import LabelText from './LabelText';

const Navbar: React.FC = (): ReactElement => {
  return (
    <Container>
      <LabelText>Graph Algorithms Visualizer</LabelText>
    </Container>
  );
};

export default Navbar;
