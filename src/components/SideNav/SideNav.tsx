import React, {ReactElement, useState} from 'react';
import StyledSideNav from './SideNavStyle';
import Slider from './Slider';
import ItemText from './ItemText';
import ToggleButton from './ToggleButton';
import Arrow from './Arrow';
import Dropdown from '../common/Dropdown/Dropdown';
import Row from '../common/Row';
import OptionButton from './Options/OptionButton';
import {AddIcon, UndirectedIcon, DirectedIcon} from './Options/OptionIcons';
import ClearButton from './ClearButton';
import Algorithms from '../../models/Algorithms';
import AlgorithmsDescription from './AlgorithmsDescription/AlgorithmsDescription';
import ScrollContainer from './ScrollContainer';
import Authors from './Authors/Authors';
import AlgorithmSettings from './AlgorithmSettings/AlgorithmSettings';
import AlgorithmOptions from '../../models/AlgorithmOptions';

interface Props {
  adjacencyList: Array<Array<number>>;
  addNewNode: () => void;
  startingNode: number;
  setStartingNode: Function;
  setZoomPercentage: Function;
  zoomPercentage: number;
  onUndirectedEdgeClick: VoidFunction;
  onDirectedEdgeClick: VoidFunction;
  visualizationSpeed: number;
  setVisualizationSpeed: Function;
  clearCanvas: Function;
  selectedAlgorithm: Algorithms;
  setSelectedAlgorithm: Function;
  algorithmOptions: AlgorithmOptions;
  setAlgorithmOptions: Function;
}

const availableAlgorithms: Array<Algorithms> = [
  Algorithms.dfs,
  Algorithms.dls,
  Algorithms.bfs,
  Algorithms.dijkstra,
  Algorithms.bellmanFord,
];

const SideNav: React.FC<Props> = (props: Props): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const adjacencyList = props.adjacencyList;

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  //TODO: Implement set selected algorithm logic
  const setSelectedAlgorithm = (val: number) => {
    const newSelectedAlgorithm = availableAlgorithms[val];
    props.setSelectedAlgorithm(newSelectedAlgorithm);
  };

  return (
    <StyledSideNav isVisible={isVisible}>
      <ScrollContainer>
        <ToggleButton isVisible={isVisible} onClick={() => toggleVisibility()}>
          <Arrow isVisible={isVisible}></Arrow>
        </ToggleButton>
        <ItemText>Algorithm</ItemText>
        <Row justifyContent="center">
          <Dropdown
            selectedTile={availableAlgorithms.indexOf(props.selectedAlgorithm)}
            setSelectedTile={setSelectedAlgorithm}
            content={availableAlgorithms}
          ></Dropdown>
        </Row>

        <AlgorithmSettings
          algorithmOptions={props.algorithmOptions}
          setAlgorithmOptions={props.setAlgorithmOptions}
          selectedAlgorithm={props.selectedAlgorithm}
          startingNode={props.startingNode}
          setStartingNode={props.setStartingNode}
          adjacencyList={props.adjacencyList}
        ></AlgorithmSettings>

        <Row justifyContent="center">
          <AlgorithmsDescription
            selectedAlgorithm={props.selectedAlgorithm}
          ></AlgorithmsDescription>
        </Row>
        <ItemText>Options</ItemText>
        <Row justifyContent="space-evenly" margin="10px 0px">
          {/* add new node */}
          <OptionButton tooltipContent="Add node" onClick={props.addNewNode}>
            <AddIcon></AddIcon>
          </OptionButton>
          <OptionButton
            tooltipContent="Add undirected edge"
            onClick={() => {
              props.onUndirectedEdgeClick();
            }}
          >
            <UndirectedIcon></UndirectedIcon>
          </OptionButton>

          <OptionButton
            tooltipContent="Add directed edge"
            onClick={() => {
              props.onDirectedEdgeClick();
            }}
          >
            <DirectedIcon></DirectedIcon>
          </OptionButton>
        </Row>
        <ClearButton
          onClick={() => {
            props.clearCanvas();
          }}
        >
          Clear Canvas
        </ClearButton>
        <ItemText>Zoom</ItemText>
        <Slider>
          <input
            type="range"
            className="slider"
            min={0.5}
            max={1.5}
            step={0.1}
            value={props.zoomPercentage}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setZoomPercentage(e.target.value)
            }
          />
        </Slider>
        <ItemText>Speed</ItemText>
        <Slider>
          <input
            type="range"
            className="slider"
            min={500}
            max={3000}
            step={50}
            value={3500 - props.visualizationSpeed}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const val: number = +e.target.value;
              const speed: number = +e.target.max + +e.target.min - val;
              props.setVisualizationSpeed(speed);
            }}
          />
        </Slider>
        <Row justifyContent="space-between" margin="-5px 27px 0px 0px">
          <ItemText>Slow</ItemText>
          <ItemText>Fast</ItemText>
        </Row>
      </ScrollContainer>
      <Authors></Authors>
    </StyledSideNav>
  );
};

export default SideNav;
