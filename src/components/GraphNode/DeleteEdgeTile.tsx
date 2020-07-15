import React, {ReactElement, useState} from 'react';
import ContextTile from '../common/ContextMenu/ContextTile';
import Arrow from '../common/ContextMenu/Arrow';
import SubMenu from '../common/ContextMenu/SubMenu/SubMenu';

interface Props {
  neighbours: Array<number>;
  onEdgeDelete: Function;
}

const DeleteEdgeTile: React.FC<Props> = (props: Props): ReactElement => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <ContextTile
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>Delete edge</div>
      <Arrow></Arrow>
      {isHovered ? <SubMenu></SubMenu> : null}
    </ContextTile>
  );
};

export default DeleteEdgeTile;
