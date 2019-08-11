import React, { Component } from 'react';
import asSVGArc from './GenericArcSVG';
class AreaLeadArcSVG extends Component {

    render() {
        return (
            <path {...this.props}
                 fill="none"
                 stroke="#5e5e54"
                 strokeWidth={17}/>
        );
    }
}

export default asSVGArc(AreaLeadArcSVG);