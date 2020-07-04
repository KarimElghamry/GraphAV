import React, {ReactElement, useState} from 'react';
import Navbar from '../Navbar/Navbar';
import SideNav from '../SideNav/SideNav';
import GraphCanvas from '../GraphCanvas/GraphCanvas';
import VisualizeButton from '../VisualizeButton/VisualizeButton';
import algorithms from '../../algorithms';

//TODO: Remove hard coded graph
const sampleGraph = [[1, 2, 4], [0, 3], [0, 5], [1], [0], [2]];

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
  const [zoomPercentage, setZoomPercentage] = useState<number>(1);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [edgeFirstNode, setEdgeFirstNode] = useState<number>();

  const onNodeConnect = (nodeIndex: number) => {
    if (isConnecting) {
      if (edgeFirstNode) {
        const newAdjacencyList = adjacencyList.slice();
        newAdjacencyList[edgeFirstNode].push(nodeIndex);
        setAdjacencyList(newAdjacencyList);
        setEdgeFirstNode(undefined);
        setIsConnecting(false);
      } else {
        setEdgeFirstNode(nodeIndex);
      }
    }
  };

  const onCreateEdge = () => {
    setEdgeFirstNode(undefined);
    setIsConnecting(true);
  };

  const addNewNode = () => {
    let newAdjacencyList = adjacencyList.slice();
    newAdjacencyList.push([]);
    setAdjacencyList((prev: Array<Array<number>>) => newAdjacencyList);
    console.log(adjacencyList);
  };

  //TODO: switch case between algorithms
  //TODO: lift state of the selected Algorithm to Home
  const handleVisualize = async () => {
    if (isVisualizing) return;
    setIsVisualizing(true);
    setVisited([]);
    await algorithms.dfs(adjacencyList, startingNode, setVisited);
    setIsVisualizing(false);
  };

  console.log(zoomPercentage);

  return (
    <div>
      <SideNav
        onUndirectedEdgeClick={onCreateEdge}
        startingNode={startingNode}
        setStartingNode={setStartingNode}
        adjacencyList={adjacencyList}
        addNewNode={addNewNode}
        setZoomPercentage={setZoomPercentage}
        zoomPercentage={zoomPercentage}
      />
      <Navbar changeTheme={props.changeTheme}></Navbar>
      <GraphCanvas
        onNodeConnect={(nodeIndex: number) => onNodeConnect(nodeIndex)}
        visited={visited}
        adjacencyList={adjacencyList}
        zoomPercentage={zoomPercentage}
      ></GraphCanvas>
      <VisualizeButton
        isVisualizing={isVisualizing}
        onClick={handleVisualize}
      ></VisualizeButton>
    </div>
  );
};

export default Home;
