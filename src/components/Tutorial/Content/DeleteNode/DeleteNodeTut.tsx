import React, { ReactElement } from 'react';
import NodeContainer from '../NodeContainer';
import ContextTile from '../../../common/ContextMenu/ContextTile';
import AddEdgeTile from '../../../GraphNode/AddEdgeTile';
import DeleteEdgeTile from '../../../GraphNode/DeleteEdgeTile';
import ContextMenu from '../../../common/ContextMenu/ContextMenu';
import Position from '../../../../models/Position';
import ClearButton from '../../../SideNav/ClearButton';
import HeadingContainer from '../HeadingContainer';
const DeleteNodeTut: React.FC = (): ReactElement => {
    const ref = React.createRef<HTMLDivElement>();
    const nodePos: Position = { top: 10, left: -110 };
    return (
        <div>
            <HeadingContainer
                style={{
                    top: -190,
                    left: -110,
                }} >
                <h1>Delete Nodes</h1>
                <h4>Right click on node to delete OR delete all nodes from the tool menu</h4>
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

            <ClearButton style={{ position: 'relative', left: 140, top: 50 }}>Clear Canvas</ClearButton>
        </div>

    );
}


export default DeleteNodeTut;