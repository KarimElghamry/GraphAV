import React, {ReactElement, useState} from 'react';
import Navbar from '../Navbar/Navbar';
import SideNav from '../SideNav/SideNav';
import GraphCanvas from '../GraphCanvas/GraphCanvas';
import VisualizeButton from '../VisualizeButton/VisualizeButton';
import algorithms from '../../algorithms';
import Algorithms from '../../models/Algorithms';
import NodeInfo from '../../models/NodeInfo';
import CreateEdgeModal from '../CreateEdgeModal/CreateEdgeModal';

interface HomeProps {
  changeTheme: Function;
}

const Home: React.FC<HomeProps> = (props: HomeProps): ReactElement => {
  const [adjacencyList, setAdjacencyList] = useState<Array<Array<number>>>([]);
  const [nodeKeys, setNodeKeys] = useState<Array<string>>([]);
  const [visited, setVisited] = useState<Array<number>>([]);
  const [currentEdge, setCurrentEdge] = useState<[number, number]>([-1, -1]);
  const [graphInfo, setGraphInfo] = useState<Array<NodeInfo>>([]);
  const [startingNode, setStartingNode] = useState<number>(0);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithms>(
    Algorithms.dfs
  );
  const [isVisualizing, setIsVisualizing] = useState<boolean>(false);
  const [zoomPercentage, setZoomPercentage] = useState<number>(1);
  const [visualizationSpeed, setVisualizationSpeed] = useState<number>(1000);
  const [isConnectingUndirected, setIsConnectingUndirected] = useState<boolean>(
    false
  );
  const [isConnectingDirected, setIsConnectingDirected] = useState<boolean>(
    false
  );

  const connectNodes = (
    firstNode: number,
    secondNode: number,
    directed: boolean
  ) => {
    if (firstNode === undefined || secondNode === undefined) return;
    if (firstNode === secondNode) return;
    if (adjacencyList[firstNode].includes(secondNode)) return;
    if (adjacencyList[secondNode].includes(firstNode)) return;

    const newAdjacencyList = adjacencyList.slice();
    newAdjacencyList[firstNode].push(secondNode);
    if (!directed) newAdjacencyList[secondNode].push(firstNode);
    setAdjacencyList(newAdjacencyList);
  };

  const deleteEdge = (firstNode: number, secondNode: number) => {
    const newAdjacencyList = adjacencyList.slice();
    newAdjacencyList[firstNode] = newAdjacencyList[firstNode].filter(
      (val: number) => val !== secondNode
    );
    newAdjacencyList[secondNode] = newAdjacencyList[secondNode].filter(
      (val: number) => val !== firstNode
    );

    setAdjacencyList(newAdjacencyList);
  };
  const deleteNode = (node: number) => {
    let newAdjacencyList = adjacencyList.map((val: Array<number>) => {
      //remove node from neighbours and decrement all nodes bigger than the
      //removed node
      return val
        .filter((neighbour: number) => node !== neighbour)
        .map((current: number) => {
          if (current >= node) return current - 1;
          return current;
        });
    });

    newAdjacencyList = newAdjacencyList.filter(
      (_, index: number) => index !== node
    );

    setAdjacencyList(newAdjacencyList);
    console.log(newAdjacencyList);
  };

  const handleEdgeModalExit = () => {
    setIsConnectingUndirected(false);
    setIsConnectingDirected(false);
  };

  const onCreateUndirectedEdge = (firstNode: number, secondNode: number) => {
    connectNodes(firstNode, secondNode, isConnectingDirected);
  };

  const addNewNode = () => {
    let newAdjacencyList = adjacencyList.slice();
    newAdjacencyList.push([]);
    setAdjacencyList((prev: Array<Array<number>>) => newAdjacencyList);
  };

  //TODO: switch case between algorithms
  const handleVisualize = async () => {
    if (adjacencyList.length === 0) return;
    if (isVisualizing) return;
    setIsVisualizing(true);
    setVisited([]);
    setCurrentEdge([-1, -1]);
    setGraphInfo([]);

    switch (selectedAlgorithm) {
      case Algorithms.dfs:
        await algorithms.dfs(
          adjacencyList,
          startingNode,
          setVisited,
          visualizationSpeed,
          setCurrentEdge
        );
        break;

      case Algorithms.dijkstra:
        await algorithms.dijkstra(
          adjacencyList,
          setVisited,
          startingNode,
          visualizationSpeed,
          setGraphInfo,
          setCurrentEdge
        );
        break;
      case Algorithms.bfs:
        await algorithms.bfs(
          adjacencyList,
          setVisited,
          startingNode,
          visualizationSpeed
        );
        break;
      default:
        break;
    }
    setIsVisualizing(false);
  };

  const changeVisualizationSpeed = (speed: number) => {
    if (isVisualizing) return;
    setVisualizationSpeed(speed);
  };

  const clearCanvas = () => {
    if (isVisualizing) return;
    setVisited([]);
    setAdjacencyList([]);
    setGraphInfo([]);
    setCurrentEdge([-1, -1]);
  };

  return (
    <div>
      <SideNav
        onUndirectedEdgeClick={() => setIsConnectingUndirected(true)}
        onDirectedEdgeClick={() => setIsConnectingDirected(true)}
        startingNode={startingNode}
        setStartingNode={setStartingNode}
        adjacencyList={adjacencyList}
        addNewNode={addNewNode}
        setZoomPercentage={setZoomPercentage}
        zoomPercentage={zoomPercentage}
        visualizationSpeed={visualizationSpeed}
        setVisualizationSpeed={changeVisualizationSpeed}
        clearCanvas={clearCanvas}
        selectedAlgorithm={selectedAlgorithm}
        setSelectedAlgorithm={setSelectedAlgorithm}
      />
      <Navbar changeTheme={props.changeTheme}></Navbar>
      <GraphCanvas
        onNodeDelete={deleteNode}
        onEdgeDelete={deleteEdge}
        onNodeConnect={() => {}}
        visited={visited}
        adjacencyList={adjacencyList}
        zoomPercentage={zoomPercentage}
        graphInfo={graphInfo}
        currentEdge={currentEdge}
      ></GraphCanvas>
      <VisualizeButton
        isVisualizing={isVisualizing}
        onClick={handleVisualize}
      ></VisualizeButton>
      <CreateEdgeModal
        directed={isConnectingDirected}
        isVisible={isConnectingDirected || isConnectingUndirected}
        onExit={handleEdgeModalExit}
        onAddEdge={onCreateUndirectedEdge}
        adjacencyList={adjacencyList}
      />
    </div>
  );
};

export default Home;
