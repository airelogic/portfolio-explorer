import React from 'react';
import asSVGArc from './GenericArcSVG';

export function AreaTeamArc(props) {

    const {portfolioTheme, ...passThrough} = props;
    return (
        <path {...passThrough}
                fill="none"
                stroke={portfolioTheme.item}
                strokeOpacity={0.5}/>
    );
}

export default asSVGArc(AreaTeamArc);