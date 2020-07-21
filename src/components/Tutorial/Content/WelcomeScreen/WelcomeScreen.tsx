import React, {ReactElement} from 'react';
import Container from './Container';
import GavLogo from './GavLogo';
import Row from '../../../common/Row';

const WelcomeScreen: React.FC = (): ReactElement => {
  return (
    <Container>
      <Row
        justifyContent="center"
        margin="30px 10px"
        style={{fontSize: '30px'}}
      >
        Welcome to
      </Row>
      <GavLogo></GavLogo>
      <Row justifyContent="center" margin="0px 10px" style={{fontSize: '80px'}}>
        GraphAV
      </Row>
    </Container>
  );
};

export default WelcomeScreen;
