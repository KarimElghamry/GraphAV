import React, {ReactElement, ReactChild, ReactChildren, useState} from 'react';
import Container from './Container';
import ToolTip from './ToolTip';

interface Props {
  onClick: Function;
  children?: ReactChild | ReactChildren;
  tooltipContent: string;
}

const OptionButton: React.FC<Props> = (props: Props): ReactElement => {
  const [isToolTipVisible, setIsToolTipVisible] = useState<boolean>(false);

  return (
    <Container
      onMouseEnter={() => setIsToolTipVisible(true)}
      onMouseLeave={() => setIsToolTipVisible(false)}
      onClick={() => props.onClick()}
    >
      <ToolTip isVisible={isToolTipVisible}>{props.tooltipContent}</ToolTip>
      {props.children}
    </Container>
  );
};

export default OptionButton;
