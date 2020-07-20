import React, { ReactElement } from 'react';
import HeadingContainer from '../HeadingContainer';

const AddEdgeTut: React.FC = (): ReactElement => {
    return (
        <div>
            <HeadingContainer>
                <h1>Add Edge</h1>
                <h4>Right click on a node to add edge OR use the tool menu</h4>
            </HeadingContainer>
        </div>
    );
}

export default AddEdgeTut;