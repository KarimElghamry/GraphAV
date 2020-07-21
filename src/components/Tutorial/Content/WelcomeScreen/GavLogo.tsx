import styled from 'styled-components';
import assets from '../../../../assets';

const GavLogo = styled.img.attrs({
  src: assets.images.gavLogo,
})`
  height: 180px;
  width: 320px;
  margin: 5px 10px;
  user-select: none;
`;

export default GavLogo;
