import React, { ReactElement } from 'react';
import StyledLink from "./StyledLink"

interface Position {
    top: number;
    left: number;
}

interface Link {
    height: number;
    width: number;
    lineX1: number;
    lineX2: number;
    lineY1: number;
    lineY2: number;
}

const NodeLink: React.FC = (): ReactElement => {

    const createLine = (n1: Position, n2: Position): Link => {
        return {
            lineX1: n1.left,
            lineX2: n2.left,
            lineY1: n1.top,
            lineY2: n2.top,
            width: Math.max(n1.left, n2.left),
            height: Math.max(n1.top, n2.top)
        } as Link;
    }

    const { height, width, lineX1, lineX2, lineY1, lineY2 }: Link
        = createLine({ top: 400, left: 700 }, { top: 550, left: 550 })
    return (
        <svg height={height} width={width}>
            <StyledLink
                x1={lineX1}
                y1={lineY1}
                x2={lineX2}
                y2={lineY2}
                style={{ stroke: "white" }} />
        </svg>
    );
};

export default NodeLink;

