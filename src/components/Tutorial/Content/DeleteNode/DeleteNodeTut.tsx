import React, { ReactElement } from 'react';
import NodeContainer from './NodeContainer';
import ContextTile from '../../../common/ContextMenu/ContextTile';
import AddEdgeTile from '../../../GraphNode/AddEdgeTile';
import DeleteEdgeTile from '../../../GraphNode/DeleteEdgeTile';
import ContextMenu from '../../../common/ContextMenu/ContextMenu';
import Position from '../../../../models/Position';

const DeleteNodeTut: React.FC = (): ReactElement => {
    const ref = React.createRef<HTMLDivElement>();
    const pos: Position = { top: -50, left: -180 };
    return (
        <div>

            <NodeContainer position={pos} ref={ref}>
                1
        </NodeContainer >
            <ContextMenu
                isVisible={true}
                position={{ top: pos.top + 50, left: pos.left + 50 }}
                setIsVisible={(val: boolean) => { }}
                canvasRef={ref}
            >

                <ContextTile>Delete node</ContextTile>
                <DeleteEdgeTile
                    onEdgeDelete={() => { }}
                    neighbours={[]}
                    canvasRef={ref}
                ></DeleteEdgeTile>
                <AddEdgeTile
                    adjacencyList={[]}
                    nodeIndex={-1}
                    canvasRef={ref}
                    isDirected={false}
                    onAdd={() => { }}
                ></AddEdgeTile>
                <AddEdgeTile
                    adjacencyList={[]}
                    nodeIndex={-1}
                    canvasRef={ref}
                    isDirected={true}
                    onAdd={() => { }}
                ></AddEdgeTile>
            </ContextMenu>

        </div>

    );
}


export default DeleteNodeTut;