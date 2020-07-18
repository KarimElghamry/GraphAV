import React, {ReactElement, useState} from 'react';
import ContextTile from '../common/ContextMenu/ContextTile';
import Arrow from '../common/ContextMenu/Arrow';

const AddEdgeTile: React.FC = (): ReactElement => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <ContextTile
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>Add Edge</div>
      <Arrow></Arrow>
    </ContextTile>
  );
};

export default AddEdgeTile;
