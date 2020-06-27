import React, {ReactElement, useState, useRef, useEffect} from 'react';
import Container from './Container';
import Arrow from './Arrow';
import ContentContainer from './ContentContainer';
import ContentTile from './ContentTile';

interface Props {
  content: Array<string>;
}
//TODO: lift selectedTile state up
const Dropdown: React.FC<Props> = (props: Props): ReactElement => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedTile, setSelectedTile] = useState<number>(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const content = props.content;
  const toggleDropdown = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (!isExpanded) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef, isExpanded, setIsExpanded]);

  return (
    <Container ref={dropdownRef} onClick={() => toggleDropdown()}>
      <div style={{marginLeft: '12px'}}>
        {content.length === 0 ? '' : content[selectedTile]}
      </div>
      <Arrow></Arrow>
      <ContentContainer isVisible={isExpanded}>
        {content.map((val: string, index: number) => {
          return (
            <ContentTile
              key={val}
              onClick={() => {
                setSelectedTile(index);
              }}
            >
              {val}
            </ContentTile>
          );
        })}
      </ContentContainer>
    </Container>
  );
};

export default Dropdown;
