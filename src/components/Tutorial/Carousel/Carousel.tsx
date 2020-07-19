import React, {ReactElement} from 'react';
import Container from './Container';
import Arrow from './Arrow';

interface Props {
  children?: Array<ReactElement>;
}

const Carousel: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Arrow></Arrow>
      </div>
    </Container>
  );
};

export default Carousel;
