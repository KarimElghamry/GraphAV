import React, {ReactElement, useState} from 'react';
import ItemText from '../ItemText';
import Row from '../../common/Row';
import InputNumber from './InputNumber/InputNumber';

const AlgorithmSettings: React.FC = (): ReactElement => {
  const [temp, setTemp] = useState<number>(0);
  return (
    <div>
      <ItemText>Max Depth</ItemText>
      <Row justifyContent="center">
        <InputNumber value={temp} setValue={setTemp}></InputNumber>
      </Row>
    </div>
  );
};

export default AlgorithmSettings;
