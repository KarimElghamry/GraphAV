import React from 'react';
import Modal from '../common/Modal/Modal';

interface Props {
    isVisible: boolean,
    onExit: Function,
}

const CreateEdgeModal = (props: Props) => {

    return (
        <Modal onExit={() => { }} isVisible={true}>
            <h1>lorem ipsum</h1>
        </Modal>
    )
};

export default CreateEdgeModal;