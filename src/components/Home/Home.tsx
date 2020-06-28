import React, {ReactElement, useState} from 'react';
import Navbar from '../Navbar/Navbar';
import SideNav from '../SideNav/SideNav';
import GraphCanvas from '../GraphCanvas/GraphCanvas';

interface HomeProps {
  changeTheme: Function;
}

const sampleData = [
  [1, 2, 3],
  [2, 3, 4],
  [4, 3, 1],
  [4, 3, 1],
];

const Home: React.FC<HomeProps> = (props: HomeProps): ReactElement => {
  const [adjacencyList, setAdjacencyList] = useState<Array<Array<number>>>(
    sampleData
  );

  const addNewNode = () => {
    setAdjacencyList((prev: Array<Array<number>>) => prev.concat([]));
  };

  return (
    <div>
      <SideNav adjacencyList={adjacencyList} addNewNode={addNewNode} />
      <Navbar changeTheme={props.changeTheme}></Navbar>
      <GraphCanvas adjacencyList={adjacencyList}></GraphCanvas>
    </div>
  );
};

export default Home;
