import React, {ReactElement} from 'react';
import ItemText from '../ItemText';
import Row from '../../common/Row';
import InputNumber from './InputNumber/InputNumber';
import AlgorithmOptions from '../../../models/AlgorithmOptions';
import Algorithms from '../../../models/Algorithms';
import Dropdown from '../../common/Dropdown/Dropdown';

interface Props {
  algorithmOptions: AlgorithmOptions;
  setAlgorithmOptions: Function;
  selectedAlgorithm: Algorithms;
  startingNode: number;
  setStartingNode: Function;
  adjacencyList: Array<Array<number>>;
}

const AlgorithmSettings: React.FC<Props> = (props: Props): ReactElement => {
  const handleDepthLimitChange = (val: number) => {
    props.setAlgorithmOptions((prev: AlgorithmOptions) => {
      return {depthLimit: val, endNode: prev.endNode} as AlgorithmOptions;
    });
  };

  const depthLimitAlgorithms: Array<Algorithms> = [Algorithms.dls];
  return (
    <React.Fragment>
      <ItemText>Starting Node</ItemText>
      <Row justifyContent="center">
        <Dropdown
          selectedTile={props.startingNode}
          setSelectedTile={props.setStartingNode}
          content={props.adjacencyList.map(
            (val: Array<number>, index: number) => {
              return (index + 1).toString();
            }
          )}
        ></Dropdown>
      </Row>
      {depthLimitAlgorithms.includes(props.selectedAlgorithm) ? (
        <React.Fragment>
          <ItemText>Depth limit</ItemText>
          <Row justifyContent="center">
            <InputNumber
              value={props.algorithmOptions.depthLimit ?? 0}
              setValue={handleDepthLimitChange}
            ></InputNumber>
          </Row>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default AlgorithmSettings;
