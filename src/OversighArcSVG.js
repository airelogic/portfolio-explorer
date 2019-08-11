import React, { Component } from 'react';
import asSVGArc from './GenericArcSVG';
class OversighArcSVG extends Component {

    render() {
        // const r = this.props.r ? this.props.r : 40;
        // const sw =  this.props.sw ? this.props.sw : 15;
        // const path = "M -" + r + " 3 A " + r + " " + r + " 0 0 0 -3 " + r;
        return (
            <path {...this.props}
                 fill="none"
                 stroke="#c7ee09"
                 strokeWidth="15"/>
        );
    }
}

export default asSVGArc(OversighArcSVG);