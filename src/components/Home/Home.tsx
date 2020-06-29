import React, {ReactElement, useState} from 'react';
import Navbar from '../Navbar/Navbar';
import SideNav from '../SideNav/SideNav';
import GraphCanvas from '../GraphCanvas/GraphCanvas';
import VisualizeButton from '../VisualizeButton/VisualizeButton';
import algorithms from '../../algorithms';

const sampleGraph = [[1, 2], [0], [0]];

interface HomeProps {
  changeTheme: Function;
}

const Home: React.FC<HomeProps> = (props: HomeProps): ReactElement => {
  const [adjacencyList, setAdjacencyList] = useState<Array<Array<number>>>(
    sampleGraph
  );
  const [visited, setVisited] = useState<Array<number>>([]);

  const addNewNode = () => {
    let newAdjacencyList = adjacencyList.slice();
    newAdjacencyList.push([]);
    setAdjacencyList((prev: Array<Array<number>>) => newAdjacencyList);
    console.log(adjacencyList);
  };

  const handleVisualize = async () => {
    await algorithms.dfs(adjacencyList, 0, setVisited);
  };

  return (
    <div>
      <SideNav adjacencyList={adjacencyList} addNewNode={addNewNode} />
      <Navbar changeTheme={props.changeTheme}></Navbar>
      <GraphCanvas adjacencyList={adjacencyList}></GraphCanvas>
      <VisualizeButton onClick={handleVisualize}></VisualizeButton>
    </div>
  );
};

export default Home;
