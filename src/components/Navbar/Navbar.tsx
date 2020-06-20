import React, {ReactElement} from 'react';
import Container from './Container';
import LabelText from './LabelText';
import Row from '../common/Row';
import GithubLogo from './GithubLogo';
import Star from './Star';
import Slider from './Slider/Slider';

interface NavbarProps {
  changeTheme: Function;
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps): ReactElement => {
  return (
    <Container>
      <LabelText>Graph Algorithms Visualizer</LabelText>
      <Row justifyContent="space-between" margin="0 18px">
        <Slider changeTheme={props.changeTheme}></Slider>
        <GithubLogo></GithubLogo>
        <Star></Star>
      </Row>
    </Container>
  );
};

export default Navbar;
