import React, {ReactElement} from 'react';
import Container from './Container';
import GithubLogo from './GithubLogo';
import AuthorTile from './AuthorTile';

const Authors: React.FC = (): ReactElement => {
  return (
    <Container>
      <AuthorTile>
        <GithubLogo></GithubLogo>
        KarimElghamry
      </AuthorTile>
      <AuthorTile>
        <GithubLogo></GithubLogo>
        AliAmin
      </AuthorTile>
    </Container>
  );
};

export default Authors;
