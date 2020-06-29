import React, {ReactElement, useState} from 'react';
import Navbar from '../Navbar/Navbar';
import SideNav from '../SideNav/SideNav';
import GraphCanvas from '../GraphCanvas/GraphCanvas';
import VisualizeButton from '../VisualizeButton/VisualizeButton';
import algorithms from '../../algorithms';

const sampleGraph = [[1, 2], [0, 3], [0], [1]];

interface HomeProps {
  changeTheme: Function;
}

const Home: React.FC<HomeProps> = (props: HomeProps): ReactElement => {
  const [adjacencyList, setAdjacencyList] = useState<Array<Array<number>>>(
    sampleGraph
  );
  const [visited, setVisited] = useState<Array<number>>([]);
  const [startingNode, setStartingNode] = useState<number>(0);
  const [isVisualizing, setIsVisualizing] = useState<boolean>(false);

  const addNewNode = () => {
    let newAdjacencyList = adjacencyList.slice();
    newAdjacencyList.push([]);
    setAdjacencyList((prev: Array<Array<number>>) => newAdjacencyList);
    console.log(adjacencyList);
  };

  const handleVisualize = async () => {
    setVisited([]);
    await algorithms.dfs(adjacencyList, startingNode, setVisited);
  };

  return (
    <div>
      <SideNav
        startingNode={startingNode}
        setStartingNode={setStartingNode}
        adjacencyList={adjacencyList}
        addNewNode={addNewNode}
      />
      <Navbar changeTheme={props.changeTheme}></Navbar>
      <GraphCanvas
        visited={visited}
        adjacencyList={adjacencyList}
      ></GraphCanvas>
      <VisualizeButton onClick={handleVisualize}></VisualizeButton>
    </div>
  );
};

export default Home;
