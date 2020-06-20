import React, {ReactElement} from 'react';
import Container from './Container';
import LabelText from './LabelText';
import Row from '../common/Row';
import assets from '../../assets';

const Navbar: React.FC = (): ReactElement => {
  return (
    <Container>
      <LabelText>Graph Algorithms Visualizer</LabelText>
      <Row justifyContent="center">
        <img src={assets.images.githubLogo} alt=""></img>
      </Row>
    </Container>
  );
};

export default Navbar;
