import styled from 'styled-components';
import Position from '../../models/Position';

interface Props {
  position: Position;
  width: number;
}

const Information = styled.div.attrs((props: Props) => ({
  style: {
    top: `${props.position.top}px`,
    left: `${props.position.left}px`,
  },
}))<Props>`
  width: ${(props) => `${props.width}px`};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  user-select: none;
`;

export default Information;
