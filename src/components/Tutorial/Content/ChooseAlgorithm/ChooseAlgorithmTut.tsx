import React, { ReactElement, useState } from 'react';
import Dropdown from '../../../common/Dropdown/Dropdown';
import HeadingContainer from '../HeadingContainer';

const ChooseAlgorithmTut: React.FC = (): ReactElement => {
    const [selectedAlgorithm, setAlgorithm] = useState<number>(0);
    const [selectedStartNode, setStartNode] = useState<number>(0);

    const algorithms: Array<string> = ["DFS", "BFS", "Djikstra"]

    return (
        <div>
            <HeadingContainer>
                <h1>Select Algorithm</h1>
                <h4>Choose algorithm then choose the starting vertix for traversal from the tool menu</h4>
            </HeadingContainer>
            <div style={{ top: -40, left: -60, position: "absolute", textAlign: 'center' }}>
                <h4>Algorithm</h4>

                <Dropdown
                    selectedTile={selectedAlgorithm}
                    setSelectedTile={setAlgorithm}
                    content={algorithms}
                ></Dropdown>
                <h4>Starting Node</h4>

                <Dropdown
                    selectedTile={selectedStartNode}
                    setSelectedTile={setStartNode}
                    content={['1', '2', '3']}
                ></Dropdown>
            </div>

        </div>
    );
}

export default ChooseAlgorithmTut;