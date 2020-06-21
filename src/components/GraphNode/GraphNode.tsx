import React, {ReactElement} from 'react';
import Container from './Container';

interface Props {
  isActive: boolean;
}

const GraphNode: React.FC<Props> = (props: Props): ReactElement => {
  console.log(1212);
  return <Container isActive={props.isActive}></Container>;
};

export default GraphNode;
