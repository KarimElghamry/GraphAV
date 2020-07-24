import React, {ReactElement} from 'react';
import ItemText from '../ItemText';
import Row from '../../common/Row';
import InputNumber from './InputNumber/InputNumber';
import AlgorithmOptions from '../../../models/AlgorithmOptions';

interface Props {
  algorithmOptions: AlgorithmOptions;
  setAlgorithmOptions: Function;
}

const AlgorithmSettings: React.FC<Props> = (props: Props): ReactElement => {
  const handleMaxDepthChange = (val: number) => {
    props.setAlgorithmOptions((prev: AlgorithmOptions) => {
      return {depthLimit: val, endNode: prev.endNode} as AlgorithmOptions;
    });
  };
  return (
    <div>
      <ItemText>Max Depth</ItemText>
      <Row justifyContent="center">
        <InputNumber
          value={props.algorithmOptions.depthLimit ?? 0}
          setValue={handleMaxDepthChange}
        ></InputNumber>
      </Row>
    </div>
  );
};

export default AlgorithmSettings;
