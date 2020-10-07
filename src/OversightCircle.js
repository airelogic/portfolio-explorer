import React from 'react';

function OversightCircle(props) {
        
    return (
        <React.Fragment>
            <circle
                cx={props.cx}
                cy={props.cy}
                r={props.r}
                fill="none"
                stroke="#a9ae93"
                strokeWidth={10}
                strokeDasharray="2 2"
                strokeOpacity={0.5}
            />
            <circle
                cx={props.cx}
                cy={props.cy}
                r={props.r + 8}
                fill="#a9ae93"
                stroke="#a9ae93"
                strokeWidth={0}
                strokeDasharray="2 2"
                strokeOpacity={0}
                opacity={0}
            />
        </React.Fragment>
    );
}

export default OversightCircle;