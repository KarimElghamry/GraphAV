import React, { ReactElement } from 'react';
import NodeContainer from './NodeContainer';
const AddNodeTut: React.FC = (): ReactElement => {
    return (
        <NodeContainer position={{ top: 0, left: -150 }}>
            1
        </NodeContainer >
    );
}


export default AddNodeTut;