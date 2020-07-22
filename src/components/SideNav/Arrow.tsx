import styled from 'styled-components';

interface Props {
  isVisible: boolean;
}

const Arrow = styled.div<Props>`
  border: solid ${(props) => props.theme.sidebar.foreground};
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 4px;
  margin-right: 10px;
  margin-left: ${(props) => (props.isVisible ? '5px' : '0px')};
  transform: ${(props) =>
    props.isVisible ? 'rotate(135deg)' : 'rotate(-45deg)'};
  -webkit-transform: ${(props) =>
    props.isVisible ? 'rotate(135deg)' : 'rotate(-45deg)'};

  transition-duration: 0.3s;
  transition-property: border-color, transform;
`;

export default Arrow;
