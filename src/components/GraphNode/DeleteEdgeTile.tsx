import React, {ReactElement} from 'react';
import ContextTile from '../common/ContextMenu/ContextTile';
import Arrow from '../common/ContextMenu/Arrow';

const DeleteEdgeTile: React.FC = (): ReactElement => {
  return (
    <ContextTile>
      <div>Delete edge</div>
      <Arrow></Arrow>
    </ContextTile>
  );
};

export default DeleteEdgeTile;
