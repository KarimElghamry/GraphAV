import styled from 'styled-components';
import assets from '../../../../assets';

const GavLogo = styled.img.attrs((props) => ({
  src: `${
    props.theme.name === 'dark'
      ? assets.images.gavDarkLogo
      : assets.images.gavLogo
  }`,
}))`
  height: 180px;
  width: 320px;
  margin: 0px 10px;
  user-select: none;
`;

export default GavLogo;
