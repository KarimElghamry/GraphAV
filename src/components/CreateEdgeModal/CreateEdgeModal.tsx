import React, {useState} from 'react';
import Modal from '../common/Modal/Modal';
import Dropdown from '../common/Dropdown/Dropdown';
import TitleText from './TitleText';
import ContentText from './ContentText';
import StyledEdgePrompt from './StyledEdgePrompt';
import StyledButton from './StyledButton';
import StyledActionContainer from './StyledActionContainer';
import Row from '../common/Row';

interface Props {
  directed: boolean;
  isVisible: boolean;
  onExit: Function;
  onAddEdge: Function;
  adjacencyList: Array<Array<number>>;
}

const CreateEdgeModal = (props: Props) => {
  const [firstNode, setFirstNode] = useState<number>(0);
  const [secondNode, setSecondNode] = useState<number>(1);

  return (
    <Modal onExit={props.onExit} isVisible={props.isVisible}>
      <div>
        <StyledEdgePrompt>
          <TitleText>
            Create {props.directed ? 'directed' : 'undirected'} edge
          </TitleText>
          <Row justifyContent="space-between">
            <ContentText>From</ContentText>
            <Dropdown
              content={props.adjacencyList.map(
                (_, index: number) => `${index + 1}`
              )}
              selectedTile={firstNode}
              setSelectedTile={setFirstNode}
            />
            <ContentText>To</ContentText>
            <Dropdown
              content={props.adjacencyList.map(
                (_, index: number) => `${index + 1}`
              )}
              selectedTile={secondNode}
              setSelectedTile={setSecondNode}
            />
          </Row>
        </StyledEdgePrompt>
        <StyledActionContainer>
          <StyledButton
            onClick={() => {
              props.onExit();
            }}
          >
            Exit
          </StyledButton>
          <StyledButton
            onClick={() => {
              props.onAddEdge(firstNode, secondNode);
            }}
          >
            Add
          </StyledButton>
        </StyledActionContainer>
      </div>
    </Modal>
  );
};

export default CreateEdgeModal;
