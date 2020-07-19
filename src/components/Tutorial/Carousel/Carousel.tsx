import React, {ReactElement} from 'react';
import Container from './Container';
import Arrow from './Arrow';
import Column from '../../common/Column';

interface Props {
  children?: Array<ReactElement>;
}

const Carousel: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <Container>
      <Column>
        <Arrow direction="left"></Arrow>
      </Column>
    </Container>
  );
};

export default Carousel;
