import React, { ReactElement } from 'react';
import HeadingContainer from '../HeadingContainer';
import NodeContainer from '../NodeContainer';
import Position from '../../../../models/Position';
import ContextMenu from '../../../common/ContextMenu/ContextMenu';
import AddEdgeTile from '../../../GraphNode/AddEdgeTile';
import DeleteEdgeTile from '../../../GraphNode/DeleteEdgeTile';
import ContextTile from '../../../common/ContextMenu/ContextTile';
import OptionButton from '../../../SideNav/Options/OptionButton';
import { UndirectedIcon, DirectedIcon } from '../../../SideNav/Options/OptionIcons';
import OptionButtonContainer from '../OptionButtonContainer';

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
                invertedTheme={true}
            >

                <ContextTile>Delete node</ContextTile>
                <DeleteEdgeTile
                    onEdgeDelete={() => { }}
                    neighbours={[]}
                    canvasRef={ref}
                />
                <AddEdgeTile
                    adjacencyList={[[14, 15, 16], [5, 6, 7], [8, 9, 10], [11, 12, 13]]}
                    nodeIndex={0}
                    canvasRef={ref}
                    isDirected={false}
                    onAdd={() => { }}
                />
                <AddEdgeTile
                    adjacencyList={[[14, 15, 16], [5, 6, 7], [8, 9, 10], [11, 12, 13]]}
                    nodeIndex={0}
                    canvasRef={ref}
                    isDirected={true}
                    onAdd={() => { }}
                />
            </ContextMenu>
            <OptionButtonContainer style={{ left: 70, top: 50 }}>
                <OptionButton
                    tooltipContent="Add undirected edge"
                    onClick={() => { }}>
                    <UndirectedIcon></UndirectedIcon>
                </OptionButton>
            </OptionButtonContainer>
            <OptionButtonContainer style={{ left: 160, top: 50 }}>
                <OptionButton
                    tooltipContent="Add directed edge"
                    onClick={() => { }}>
                    <DirectedIcon></DirectedIcon>
                </OptionButton>
            </OptionButtonContainer>
        </div>
    );
}

export default AddEdgeTut;