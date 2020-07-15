import React, {ReactElement} from 'react';
import Container from './Container';

interface Props {
  children?:
    | Array<ReactElement>
    | ReactElement
    | React.ReactChild
    | React.ReactChildren;
}

const SubMenu: React.FC<Props> = (props: Props): ReactElement => {
  return <Container>{props.children}</Container>;
};

export default SubMenu;
