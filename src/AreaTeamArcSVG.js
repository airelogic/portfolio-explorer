import React, { Component } from 'react';
import asSVGArc from './GenericArcSVG';
class AreaTeamArc extends Component {

    render() {
        return (
            <path {...this.props}
                 fill="none"
                 stroke="#759f06"
                 strokeOpacity={0.5}/>
        );
    }
}

export default asSVGArc(AreaTeamArc);