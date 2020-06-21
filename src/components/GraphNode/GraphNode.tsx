import React, {ReactElement} from 'react';
import Container from './Container';

interface Props {
  isActive: boolean;
  content: string;
}

const GraphNode: React.FC<Props> = (props: Props): ReactElement => {
  console.log(1212);
  return <Container isActive={props.isActive}>{props.content}</Container>;
};

export default GraphNode;
