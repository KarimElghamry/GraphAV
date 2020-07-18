import React, {ReactElement, useState} from 'react';
import ContextTile from '../common/ContextMenu/ContextTile';
import Arrow from '../common/ContextMenu/Arrow';
import SubMenu from '../common/ContextMenu/SubMenu/SubMenu';
import {render} from '@testing-library/react';

interface Props {
  canvasRef: React.RefObject<HTMLDivElement>;
  adjacencyList: Array<Array<number>>;
  nodeIndex: number;
}

const AddEdgeTile: React.FC<Props> = (props: Props): ReactElement => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const nonConnectedNodes = props.adjacencyList.map(
    (val: Array<number>, index: number) => {
      if (
        index !== props.nodeIndex &&
        !props.adjacencyList[props.nodeIndex].includes(index) &&
        !val.includes(props.nodeIndex)
      ) {
        return index;
      }
      return -1;
    }
  );

  const renderedList = nonConnectedNodes.filter((val: number) => val !== -1);

  return (
    <ContextTile
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>Add directed edge</div>
      <Arrow></Arrow>
      {isHovered && renderedList.length !== 0 ? (
        <SubMenu canvasRef={props.canvasRef}>
          {renderedList.map((val: number) => (
            <ContextTile>{val + 1}</ContextTile>
          ))}
        </SubMenu>
      ) : null}
    </ContextTile>
  );
};

export default AddEdgeTile;
