import React, { Component } from 'react';
import asSVGArc from './GenericArcSVG';
class AreaTeamArc extends Component {

    render() {
        const {portfolioColours, ...passThrough} = this.props;
        return (
            <path {...passThrough}
                 fill="none"
                 stroke={portfolioColours.item}
                 strokeOpacity={0.5}/>
        );
    }
}

export default asSVGArc(AreaTeamArc);