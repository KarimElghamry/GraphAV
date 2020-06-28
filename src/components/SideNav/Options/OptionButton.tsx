import React, {ReactElement, ReactChild, ReactChildren} from 'react';
import Container from './Container';

interface Props {
  onClick: Function;
  children?: ReactChild | ReactChildren;
}

const OptionButton: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <Container onClick={() => props.onClick()}>{props.children}</Container>
  );
};

export default OptionButton;
