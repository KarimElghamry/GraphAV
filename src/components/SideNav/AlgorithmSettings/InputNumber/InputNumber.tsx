import React, {ReactElement} from 'react';
import Container from './Container';

interface Props {
  value: number;
  setValue: (value: number) => void;
}

const InputNumber: React.FC<Props> = (props: Props): ReactElement => {
  const handleTextInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.validity.valid) {
      props.setValue(
        e.currentTarget.value.length === 0 ? 0 : parseInt(e.currentTarget.value)
      );
    }
  };

  return (
    <Container
      type="text"
      pattern="[0-9]*"
      onChange={handleTextInputChange}
      value={props.value}
    ></Container>
  );
};

export default InputNumber;
