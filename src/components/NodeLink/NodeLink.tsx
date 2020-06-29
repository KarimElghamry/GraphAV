import React, { ReactElement, RefObject, useEffect, useState } from 'react';
import StyledLink from "./StyledLink"
import Position from "../../models/Position"

interface Link {
    height: number;
    width: number;
    lineX1: number;
    lineX2: number;
    lineY1: number;
    lineY2: number;
}

interface NodeLinkProps {
    n1: RefObject<HTMLSpanElement>;
    n2: RefObject<HTMLSpanElement>;
}

const NodeLink: React.FC<NodeLinkProps> = (props: NodeLinkProps): ReactElement => {

    const [{ lineX1, lineX2, lineY1, lineY2, width, height }, setLink] = useState<Link>({} as Link);

    const createLine = (n1: RefObject<HTMLSpanElement>, n2: RefObject<HTMLSpanElement>): Link => {
        if (!n1.current || !n2.current) return {} as Link;
        const n1Rect = n1.current.getBoundingClientRect();
        const n2Rect = n2.current.getBoundingClientRect();
        const nodeWidth = n1.current.offsetParent?.clientWidth ?? 0;
        const left1 = n1Rect.left;
        const left2 = n2Rect.left;
        const top1 = n1Rect.top - (nodeWidth / 2);
        const top2 = n2Rect.top - (nodeWidth / 2);

        return {
            lineX1: left1,
            lineX2: left2,
            lineY1: top1,
            lineY2: top2,
            width: Math.max(left1, left2),
            height: Math.max(top1, top2)
        } as Link;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const newLink = createLine(props.n1, props.n2);
            setLink(newLink);
        }, 16.7);
        return () => clearInterval(interval);
    })

    return (
        <svg height={height} width={width}>
            <StyledLink
                x1={lineX1}
                y1={lineY1}
                x2={lineX2}
                y2={lineY2}
            />
        </svg>
    );
};

export default NodeLink;

