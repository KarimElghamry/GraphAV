import React, {ReactElement, useState} from 'react';
import ItemText from '../ItemText';

const AlgorithmSettings: React.FC = (): ReactElement => {
  const [temp, setTemp] = useState<number>(0);
  const handleTextInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.validity.valid) {
      setTemp(
        e.currentTarget.value.length === 0 ? 0 : parseInt(e.currentTarget.value)
      );
    }
  };

  return (
    <div>
      <ItemText>Max Depth</ItemText>
      <input
        type="text"
        pattern="[0-9]*"
        onChange={handleTextInputChange}
        value={temp}
      ></input>
    </div>
  );
};

export default AlgorithmSettings;
