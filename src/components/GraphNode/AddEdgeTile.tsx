import React, {ReactElement, useState} from 'react';
import ContextTile from '../common/ContextMenu/ContextTile';
import Arrow from '../common/ContextMenu/Arrow';
import SubMenu from '../common/ContextMenu/SubMenu/SubMenu';

interface Props {
  canvasRef: React.RefObject<HTMLDivElement>;
}

const AddEdgeTile: React.FC<Props> = (props: Props): ReactElement => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <ContextTile
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>Add Edge</div>
      <Arrow></Arrow>
      {isHovered ? <SubMenu canvasRef={props.canvasRef}></SubMenu> : null}
    </ContextTile>
  );
};

export default AddEdgeTile;
