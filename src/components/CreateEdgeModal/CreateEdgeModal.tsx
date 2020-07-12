import React from 'react';
import Modal from '../common/Modal/Modal';
import Dropdown from '../common/Dropdown/Dropdown';
import StyledEdgePrompt from './StyledEdgePrompt';
import StyledRow from './StyledRow';
import StyledButton from './StyledButton';
import StyledActionContainer from './StyledActionContainer';

interface Props {
    directed: boolean;
    isVisible: boolean,
    onExit: Function,
}

const CreateEdgeModal = (props: Props) => {

    return (
        <Modal onExit={() => { }} isVisible={true}>
            <div>
                <StyledEdgePrompt>
                    <h2>Create {props.directed ? "directed" : "undirected"} edge</h2>
                    <StyledRow>
                        From
                        <Dropdown content={["1", "2"]} selectedTile={2} setSelectedTile={() => { }} />
                        To
                        <Dropdown content={["1", "2"]} selectedTile={2} setSelectedTile={() => { }} />
                    </StyledRow>
                </StyledEdgePrompt>
                <StyledActionContainer>
                    <StyledButton>Exit</StyledButton>
                    <StyledButton>Add</StyledButton>
                </StyledActionContainer>

            </div>
        </Modal >
    )
};

export default CreateEdgeModal;