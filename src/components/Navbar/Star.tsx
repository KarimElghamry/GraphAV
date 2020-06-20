import styled from 'styled-components';

const Star = styled.div`
  position: relative;
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 18%;
  border-right: 0.3em solid transparent;
  border-bottom: 0.7em solid white;
  border-left: 0.3em solid transparent;

  /* Controlls the size of the stars. */
  font-size: 15px;

  &:before,
  &:after {
    content: '';

    display: block;
    width: 0;
    height: 0;

    position: absolute;
    top: 0.6em;
    left: -1em;

    border-right: 1em solid transparent;
    border-bottom: 0.7em solid white;
    border-left: 1em solid transparent;

    transform: rotate(-35deg);
  }

  &:after {
    transform: rotate(35deg);
  }
`;

export default Star;
