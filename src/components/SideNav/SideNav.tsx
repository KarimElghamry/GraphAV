import React, {ReactElement, useState} from 'react';
import StyledSideNav from './SideNavStyle';
import Slider from './Slider';
import ItemText from './ItemText';
import ToggleButton from './ToggleButton';
import Arrow from './Arrow';
import Dropdown from './Dropdown/Dropdown';
import Row from '../common/Row';
import OptionButton from './Options/OptionButton';
import {AddIcon, UndirectedIcon, DirectedIcon} from './Options/OptionIcons';

interface Props {
  adjacencyList: Array<Array<number>>;
  addNewNode: () => void;
  startingNode: number;
  setStartingNode: Function;
  setZoomPercentage: Function;
  zoomPercentage: number;
  onUndirectedEdgeClick: VoidFunction;
  visualizationSpeed: number;
  setVisualizationSpeed: Function;
}

const sampleAlgorithms: Array<string> = [
  'DFS',
  'BFS',
  'Dijkstra',
  'Prim',
  'A*',
  'Bellman',
];

const SideNav: React.FC<Props> = (props: Props): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const adjacencyList = props.adjacencyList;

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  //TODO: Implement set selected algorithm logic
  const setSelectedAlgorithm = (val: number) => {};

  return (
    <StyledSideNav isVisible={isVisible}>
      <ToggleButton isVisible={isVisible} onClick={() => toggleVisibility()}>
        <Arrow isVisible={isVisible}></Arrow>
      </ToggleButton>
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
      <ItemText>Algorithm</ItemText>
      <Dropdown
        selectedTile={0}
        setSelectedTile={setSelectedAlgorithm}
        content={sampleAlgorithms}
      ></Dropdown>
      <ItemText>Starting Node</ItemText>
      <Dropdown
        selectedTile={props.startingNode}
        setSelectedTile={props.setStartingNode}
        content={adjacencyList.map((val: Array<number>, index: number) => {
          return (index + 1).toString();
        })}
      ></Dropdown>
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
        <OptionButton tooltipContent="Add directed edge" onClick={() => {}}>
          <DirectedIcon></DirectedIcon>
        </OptionButton>
      </Row>
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
            console.log(speed);
            props.setVisualizationSpeed(speed);
          }}
        />
        <Row justifyContent="space-between" margin="-20px 0px 0px -20px">
          <ItemText>Slow</ItemText>
          <ItemText>Fast</ItemText>
        </Row>
      </Slider>
    </StyledSideNav>
  );
};

export default SideNav;
