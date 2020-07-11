import React, {ReactElement, useState} from 'react';
import Navbar from '../Navbar/Navbar';
import SideNav from '../SideNav/SideNav';
import GraphCanvas from '../GraphCanvas/GraphCanvas';
import VisualizeButton from '../VisualizeButton/VisualizeButton';
import algorithms from '../../algorithms';
import Algorithms from '../../models/Algorithms';
import NodeInfo from '../../models/NodeInfo';
import Modal from '../common/Modal/Modal';

interface HomeProps {
  changeTheme: Function;
}

const Home: React.FC<HomeProps> = (props: HomeProps): ReactElement => {
  const [adjacencyList, setAdjacencyList] = useState<Array<Array<number>>>([]);
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
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [edgeFirstNode, setEdgeFirstNode] = useState<number>();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);

  const onNodeConnect = (nodeIndex: number) => {
    if (isConnecting) {
      if (edgeFirstNode !== undefined) {
        const newAdjacencyList = adjacencyList.slice();
        newAdjacencyList[edgeFirstNode].push(nodeIndex);
        newAdjacencyList[nodeIndex].push(edgeFirstNode);
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
  };

  //TODO: switch case between algorithms
  const handleVisualize = async () => {
    if (adjacencyList.length === 0) return;
    if (isVisualizing) return;
    setIsVisualizing(true);
    setVisited([]);

    switch (selectedAlgorithm) {
      case Algorithms.dfs:
        await algorithms.dfs(
          adjacencyList,
          startingNode,
          setVisited,
          visualizationSpeed
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

  const handleModalExit = () => {
    setIsModalVisible(false);
  };

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
        visualizationSpeed={visualizationSpeed}
        setVisualizationSpeed={changeVisualizationSpeed}
        clearCanvas={clearCanvas}
        selectedAlgorithm={selectedAlgorithm}
        setSelectedAlgorithm={setSelectedAlgorithm}
      />
      <Navbar changeTheme={props.changeTheme}></Navbar>
      <GraphCanvas
        onNodeConnect={(nodeIndex: number) => onNodeConnect(nodeIndex)}
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
      <Modal isVisible={isModalVisible} onExit={handleModalExit}>
        EMINEM
      </Modal>
    </div>
  );
};

export default Home;
