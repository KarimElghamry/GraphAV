import React, { ReactElement } from 'react';
import HeadingContainer from '../HeadingContainer';
import NodeContainer from '../NodeContainer';
import Position from '../../../../models/Position';

const AddEdgeTut: React.FC = (): ReactElement => {
    const nodePos: Position = { top: 50, left: -110 };
    const ref = React.createRef<HTMLDivElement>();

    return (
        <div>
            <HeadingContainer>
                <h1>Add Edge</h1>
                <h4>Right click on a node to add edge OR use the tool menu</h4>
            </HeadingContainer>
            <NodeContainer position={nodePos} ref={ref}>1</NodeContainer >
        </div>
    );
}

export default AddEdgeTut;