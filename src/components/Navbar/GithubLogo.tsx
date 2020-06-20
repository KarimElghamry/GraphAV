import styled from 'styled-components';
import assets from '../../assets';

const GithubLogo = styled.img.attrs({
  src: assets.images.githubLogo,
})`
  height: 28px;
  width: 28px;
  margin: 0 10px;
  user-select: none;
`;

export default GithubLogo;
