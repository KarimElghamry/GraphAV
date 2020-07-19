import React, {ReactElement} from 'react';
import Modal from '../common/Modal/Modal';
import Carousel from './Carousel/Carousel';

interface Props {
  isVisible: boolean;
  onExit: () => void;
}

const Tutorial: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <Modal isVisible={props.isVisible} onExit={props.onExit}>
      <div style={{width: '600px', height: '500px'}}>
        <Carousel>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </Carousel>
      </div>
    </Modal>
  );
};

export default Tutorial;
