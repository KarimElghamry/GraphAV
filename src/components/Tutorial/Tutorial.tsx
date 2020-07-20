import React, { ReactElement } from 'react';
import Modal from '../common/Modal/Modal';
import Carousel from './Carousel/Carousel';
import DeleteNodeTut from './Content/DeleteNode/DeleteNodeTut';
import ContentContainer from './Content/ContentContainer';
import AddNodeTut from './Content/AddNode/AddNodeTut';
import AddEdgeTut from './Content/AddEdge/AddEdgeTut';
import ChooseAlgorithmTut from './Content/ChooseAlgorithm/ChooseAlgorithmTut';
interface Props {
  isVisible: boolean;
  onExit: () => void;
}

const Tutorial: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <Modal isVisible={props.isVisible} onExit={props.onExit}>
      <div style={{ width: '600px', height: '500px' }}>
        <Carousel>
          <div>WELCOME</div>
          <ContentContainer><AddNodeTut /></ContentContainer>
          <ContentContainer><AddEdgeTut /></ContentContainer>
          <ContentContainer><DeleteNodeTut /></ContentContainer>
          <ContentContainer><ChooseAlgorithmTut /></ContentContainer>
        </Carousel>
      </div>
    </Modal>
  );
};

export default Tutorial;
