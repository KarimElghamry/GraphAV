import styled from 'styled-components';
import assets from '../../assets';

const HelpIcon = styled.img.attrs({
  src: assets.images.helpIcon,
})`
  height: 28px;
  width: 28px;
  margin: 0 10px;
  user-select: none;
  cursor: pointer;
`;

export default HelpIcon;
