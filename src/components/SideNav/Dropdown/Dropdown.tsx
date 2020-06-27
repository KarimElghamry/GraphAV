import React, {ReactElement, useState} from 'react';
import Container from './Container';
import Arrow from './Arrow';
import ContentContainer from './ContentContainer';
import ContentTile from './ContentTile';

interface Props {
  content: Array<string>;
}

const Dropdown: React.FC<Props> = (props: Props): ReactElement => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const toggleDropdown = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Container onClick={() => toggleDropdown()}>
      <div style={{marginLeft: '12px'}}>DFS</div>
      <Arrow></Arrow>
      <ContentContainer isVisible={isExpanded}>
        <ContentTile>BFS</ContentTile>
        <ContentTile>BFS</ContentTile>
        <ContentTile>BFS</ContentTile>
        <ContentTile>BFS</ContentTile>
      </ContentContainer>
    </Container>
  );
};

export default Dropdown;
