import React, {ReactElement, useState} from 'react';
import Container from './Container';
import Arrow from './Arrow';
import Column from '../../common/Column';
import Row from '../../common/Row';
import CircleIndicators from './CircleIndicators/CircleIndicators';

interface Props {
  children?: Array<ReactElement>;
}

const Carousel: React.FC<Props> = (props: Props): ReactElement => {
  const [currentSelection, setCurrentSelection] = useState<number>(0);

  const onCircleSelect = (index: number) => {
    setCurrentSelection(index);
  };

  const scrollNext = () => {
    if (currentSelection === (props.children?.length ?? 1) - 1) {
      setCurrentSelection(0);
    } else {
      setCurrentSelection((prev) => prev + 1);
    }
  };

  return (
    <Container>
      <Column width="100px">
        <Arrow direction="left"></Arrow>
      </Column>
      <Column width="100%">
        <Row justifyContent="center" style={{height: '90%', width: '100%'}}>
          EMINEM
        </Row>
        <Row justifyContent="center" style={{height: '10%', width: '100%'}}>
          <CircleIndicators
            circlesCount={props.children?.length ?? 0}
            selected={currentSelection}
            onCircleSelect={onCircleSelect}
          ></CircleIndicators>
        </Row>
      </Column>
      <Column width="100px">
        <Arrow direction="right"></Arrow>
      </Column>
    </Container>
  );
};

export default Carousel;
