import React, {ReactElement} from 'react';
import Container from './Container';
import GithubLogo from './GithubLogo';
import AuthorTile from './AuthorTile';

const authorsDetails = {
  KarimElghamry: 'https://github.com/KarimElghamry',
  AliAmin: 'https://github.com/Ali-Amin',
};

const Authors: React.FC = (): ReactElement => {
  const openUrl = (url: string) => {
    window.open(url, '_blank')?.focus();
  };

  return (
    <Container>
      {Object.entries(authorsDetails).map((item: [string, string]) => {
        return (
          <AuthorTile onClick={() => openUrl(item[1])}>
            <GithubLogo></GithubLogo>
            {item[0]}
          </AuthorTile>
        );
      })}
    </Container>
  );
};

export default Authors;
