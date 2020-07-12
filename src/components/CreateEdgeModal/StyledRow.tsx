import styled from 'styled-components';

interface Props {
    alignItems?: string;
    justifyItems?: string;
};

const StyledRow = styled.div<Props>`
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-items: center;
    justify-items: space-between;
    grid-gap: 40px;
`;

export default StyledRow;