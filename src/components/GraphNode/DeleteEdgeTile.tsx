import React, {ReactElement} from 'react';
import ContextTile from '../common/ContextMenu/ContextTile';
import Arrow from '../common/ContextMenu/Arrow';

interface Props {
  neighbours: Array<number>;
  onEdgeDelete: Function;
}

const DeleteEdgeTile: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <ContextTile>
      <div>Delete edge</div>
      <Arrow></Arrow>
    </ContextTile>
  );
};

export default DeleteEdgeTile;
