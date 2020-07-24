import React, {ReactElement} from 'react';
import ItemText from '../ItemText';
import Row from '../../common/Row';
import InputNumber from './InputNumber/InputNumber';
import AlgorithmOptions from '../../../models/AlgorithmOptions';
import Algorithms from '../../../models/Algorithms';

interface Props {
  algorithmOptions: AlgorithmOptions;
  setAlgorithmOptions: Function;
  selectedAlgorithm: Algorithms;
}

const AlgorithmSettings: React.FC<Props> = (props: Props): ReactElement => {
  const handleDepthLimitChange = (val: number) => {
    props.setAlgorithmOptions((prev: AlgorithmOptions) => {
      return {depthLimit: val, endNode: prev.endNode} as AlgorithmOptions;
    });
  };

  const depthLimitAlgorithms: Array<Algorithms> = [Algorithms.dls];
  return (
    <div>
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
    </div>
  );
};

export default AlgorithmSettings;
