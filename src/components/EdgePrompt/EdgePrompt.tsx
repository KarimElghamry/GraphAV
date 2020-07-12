import React from 'react';
import Modal from '../common/Modal/Modal';

interface Props {
    isVisible: boolean,
}

const EdgePrompt = (props: Props) => {
    return (
        <Modal onExit={() => { }} isVisible={true}>
            <h1>lorem ipsum</h1>
        </Modal>
    )
};

export default EdgePrompt;