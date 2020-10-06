import React, { Component } from 'react';
import asSVGArc from './GenericArcSVG';
class AreaLeadArcSVG extends Component {

    render() {
        const {portfolioColours, ...passThrough} = this.props;
        return (
            <path {...passThrough}
                 fill="none"
                 stroke={portfolioColours.itemLead}
                 strokeWidth={17}/>
        );
    }
}

export default asSVGArc(AreaLeadArcSVG);