import React, {ReactElement} from 'react';
import Modal from '../common/Modal/Modal';
import Carousel from './Carousel/Carousel';

const Tutorial: React.FC = (): ReactElement => {
  return (
    <Modal isVisible={true} onExit={() => {}}>
      <div style={{width: '600px', height: '500px'}}>
        <Carousel>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Carousel>
      </div>
    </Modal>
  );
};

export default Tutorial;
