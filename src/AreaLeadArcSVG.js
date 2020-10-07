import React from 'react';
import asSVGArc from './GenericArcSVG';

export function AreaLeadArcSVG(props) {

    const {portfolioTheme, ...passThrough} = props;
    return (
        <path {...passThrough}
                fill="none"
                stroke={portfolioTheme.itemLead}
                strokeWidth={17}/>
    );
}

export default asSVGArc(AreaLeadArcSVG);