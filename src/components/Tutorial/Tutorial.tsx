import React, {ReactElement} from 'react';
import Modal from '../common/Modal/Modal';

const Tutorial: React.FC = (): ReactElement => {
  return (
    <Modal isVisible={true} onExit={() => {}}>
      <div></div>
    </Modal>
  );
};

export default Tutorial;
