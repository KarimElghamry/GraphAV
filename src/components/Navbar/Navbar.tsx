import React, {ReactElement} from 'react';
import Container from './Container';
import LabelText from './LabelText';
import Row from '../common/Row';
import GithubLogo from './GithubLogo';
import Star from './Star';

const Navbar: React.FC = (): ReactElement => {
  return (
    <Container>
      <LabelText>Graph Algorithms Visualizer</LabelText>
      <Row justifyContent="center">
        <GithubLogo></GithubLogo>
        <Star></Star>
      </Row>
    </Container>
  );
};

export default Navbar;
