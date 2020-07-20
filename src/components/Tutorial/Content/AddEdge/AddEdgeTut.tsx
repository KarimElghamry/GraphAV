import React, { ReactElement } from 'react';
import HeadingContainer from '../HeadingContainer';
import NodeContainer from '../NodeContainer';
import Position from '../../../../models/Position';
import ContextMenu from '../../../common/ContextMenu/ContextMenu';
import AddEdgeTile from '../../../GraphNode/AddEdgeTile';
import DeleteEdgeTile from '../../../GraphNode/DeleteEdgeTile';
import ContextTile from '../../../common/ContextMenu/ContextTile';

const AddEdgeTut: React.FC = (): ReactElement => {
    const nodePos: Position = { top: -50, left: -230 };
    const ref = React.createRef<HTMLDivElement>();

    return (
        <div>
            <HeadingContainer>
                <h1>Add Edge</h1>
                <h4>Right click on a node to add edge OR use the tool menu</h4>
            </HeadingContainer>
            <NodeContainer position={nodePos} ref={ref}>1</NodeContainer >
            <ContextMenu
                isVisible={true}
                position={{ top: nodePos.top + 50, left: nodePos.left + 50 }}
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
                    adjacencyList={[[14, 15, 16], [5, 6, 7], [8, 9, 10], [11, 12, 13]]}
                    nodeIndex={0}
                    canvasRef={ref}
                    isDirected={false}
                    onAdd={() => { }}
                ></AddEdgeTile>
                <AddEdgeTile
                    adjacencyList={[[14, 15, 16], [5, 6, 7], [8, 9, 10], [11, 12, 13]]}
                    nodeIndex={0}
                    canvasRef={ref}
                    isDirected={true}
                    onAdd={() => { }}
                ></AddEdgeTile>
            </ContextMenu>
        </div>
    );
}

export default AddEdgeTut;