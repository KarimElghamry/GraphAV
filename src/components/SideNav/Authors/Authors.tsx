import React, {ReactElement} from 'react';
import Container from './Container';
import GithubLogo from './GithubLogo';

const Authors: React.FC = (): ReactElement => {
  return (
    <Container>
      <div>
        <GithubLogo></GithubLogo>
      </div>
      <GithubLogo></GithubLogo>
    </Container>
  );
};

export default Authors;
