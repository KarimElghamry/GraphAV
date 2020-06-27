import React, {ReactElement, useState} from 'react';
import StyledSideNav from './SideNavStyle';
import ZoomSlider from './ZoomSlider';
import ItemText from './ItemText';
import ToggleButton from './ToggleButton';
import Arrow from './Arrow';
import Dropdown from './Dropdown/Dropdown';
import Row from '../common/Row';
import OptionButton from './OptionButton';

interface Props {
  adjacencyList: Array<Array<number>>;
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
  return (
    <StyledSideNav isVisible={isVisible}>
      <ToggleButton isVisible={isVisible} onClick={() => toggleVisibility()}>
        <Arrow isVisible={isVisible}></Arrow>
      </ToggleButton>
      <ItemText>Zoom</ItemText>
      <ZoomSlider>
        <input type="range" className="slider" />
      </ZoomSlider>
      <ItemText>Algorithm</ItemText>
      <Dropdown content={sampleAlgorithms}></Dropdown>
      <ItemText>Starting Node</ItemText>
      <Dropdown
        content={adjacencyList.map((val: Array<number>, index: number) => {
          return (index + 1).toString();
        })}
      ></Dropdown>
      <ItemText>Options</ItemText>
      <Row justifyContent="space-evenly" margin="10px 0px">
        <OptionButton></OptionButton>
        <OptionButton></OptionButton>
        <OptionButton></OptionButton>
      </Row>
    </StyledSideNav>
  );
};

export default SideNav;
