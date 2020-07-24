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
  adjacencyList: Array<Array<number>>;
}

const AlgorithmSettings: React.FC<Props> = (props: Props): ReactElement => {
  const handleDepthLimitChange = (val: number) => {
    props.setAlgorithmOptions((prev: AlgorithmOptions) => {
      const newOptions: AlgorithmOptions = Object.create(prev);
      newOptions.depthLimit = val;
      return Object.assign(newOptions);
    });
  };

  const setStartingNode = (val: number) => {
    props.setAlgorithmOptions((prev: AlgorithmOptions) => {
      const newOptions: AlgorithmOptions = Object.create(prev);
      newOptions.startNode = val;
      return Object.assign(newOptions);
    });
  };

  const depthLimitAlgorithms: Array<Algorithms> = [Algorithms.dls];
  return (
    <React.Fragment>
      <ItemText>Starting Node</ItemText>
      <Row justifyContent="center">
        <Dropdown
          selectedTile={props.algorithmOptions.startNode ?? 0}
          setSelectedTile={setStartingNode}
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
