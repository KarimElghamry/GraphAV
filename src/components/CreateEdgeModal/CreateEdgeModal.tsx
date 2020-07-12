import React from 'react';
import Modal from '../common/Modal/Modal';
import Dropdown from '../common/Dropdown/Dropdown';
import TitleText from './TitleText';
import ContentText from './ContentText';
import StyledEdgePrompt from './StyledEdgePrompt';
import StyledRow from './StyledRow';
import StyledButton from './StyledButton';
import StyledActionContainer from './StyledActionContainer';

interface Props {
    directed: boolean;
    isVisible: boolean,
    onExit: Function,
    onAddEdge: Function,
    adjacencyList: Array<Array<number>>,
}

const CreateEdgeModal = (props: Props) => {

    const nodes: Array<string> = props.adjacencyList.map((_, index: number) => `${index + 1}`);

    return (
        <Modal onExit={props.onExit} isVisible={props.isVisible}>
            <div>
                <StyledEdgePrompt>
                    <TitleText>Create {props.directed ? "directed" : "undirected"} edge</TitleText>
                    <StyledRow>
                        <ContentText>From</ContentText>
                        <Dropdown content={nodes} selectedTile={2} setSelectedTile={() => { }} />
                        <ContentText>To</ContentText>
                        <Dropdown content={nodes} selectedTile={2} setSelectedTile={() => { }} />
                    </StyledRow>
                </StyledEdgePrompt>
                <StyledActionContainer>
                    <StyledButton onClick={() => { props.onExit() }}>Exit</StyledButton>
                    <StyledButton onClick={() => { props.onAddEdge() }}>Add</StyledButton>
                </StyledActionContainer>

            </div>
        </Modal >
    )
};

export default CreateEdgeModal;