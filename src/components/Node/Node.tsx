import React, {ReactElement} from 'react';
import Container from './Container';

interface Props {
  isActive: boolean;
}

const Node: React.FC<Props> = (props: Props): ReactElement => {
  return <Container isActive={props.isActive}></Container>;
};

export default Node;
