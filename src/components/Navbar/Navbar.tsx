import React, {ReactElement} from 'react';
import Container from './Container';
import Row from '../common/Row';
import GithubLogo from './GithubLogo';
import Star from './Star';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';
import GraphAVLogo from './GraphAVLogo';

interface NavbarProps {
  changeTheme: Function;
  onHelpClick: () => void;
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps): ReactElement => {
  return (
    <Container>
      <Row justifyContent="center">
        <GraphAVLogo></GraphAVLogo>
      </Row>

      <Row justifyContent="space-evenly" margin="0 18px">
        <ThemeSwitch changeTheme={props.changeTheme}></ThemeSwitch>
        <GithubLogo></GithubLogo>
        <Star onClick={() => props.onHelpClick()}></Star>
      </Row>
    </Container>
  );
};

export default Navbar;
