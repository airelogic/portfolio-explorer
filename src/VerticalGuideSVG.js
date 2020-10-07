import React from 'react';

function VerticalGuideSVG(props) {

    const xoff = props.xoff ? props.xoff : 0;
    return (
        <React.Fragment>
            <text x={xoff + 2} y={props.y1 + 10}
                fill="#666666"
                font="ubuntu"
                fontSize="8px">{xoff}</text>
            <line
                x1={xoff}
                x2={xoff}
                y1={props.y1}
                y2={props.y2}
            stroke="#cccccc"
            strokeWidth={0.5}
            strokeOpacity={0.50} />
        </React.Fragment>
    );
}

export default VerticalGuideSVG;