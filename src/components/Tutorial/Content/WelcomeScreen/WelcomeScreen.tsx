import React, {ReactElement} from 'react';
import Container from './Container';
import GavLogo from './GavLogo';

const WelcomeScreen: React.FC = (): ReactElement => {
  return (
    <Container>
      <GavLogo></GavLogo>
      <div>EMINEM</div>
    </Container>
  );
};

export default WelcomeScreen;
