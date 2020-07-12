import React from 'react';
import Modal from '../common/Modal/Modal';
import Dropdown from '../common/Dropdown/Dropdown';
import StyledEdgePrompt from './StyledEdgePrompt';
import StyledDropdownContainer from './StyledDropdownContainer';
interface Props {
    directed: boolean;
    isVisible: boolean,
    onExit: Function,
}

const CreateEdgeModal = (props: Props) => {

    return (
        <Modal onExit={() => { }} isVisible={true}>
            <StyledEdgePrompt>
                <h2>Create {props.directed ? "directed" : "undirected"} edge</h2>
                <StyledDropdownContainer>
                    From
                        <Dropdown content={["1", "2"]} selectedTile={2} setSelectedTile={() => { }} />
                        To
                        <Dropdown content={["1", "2"]} selectedTile={2} setSelectedTile={() => { }} />
                </StyledDropdownContainer>

            </StyledEdgePrompt>
        </Modal >
    )
};

export default CreateEdgeModal;