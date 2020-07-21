import styled from 'styled-components';
import assets from '../../assets';

const GavLogo = styled.img.attrs({
  src: assets.images.gavLogo,
})`
  height: 28px;
  width: 28px;
  margin: 0 10px;
  user-select: none;
`;

export default GavLogo;
