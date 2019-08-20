import React, { Component } from 'react';
import asSVGArc from './GenericArcSVG';
import './OversightArcSVG.css';

class OversightArcSVG extends Component {

    render() {
        return (
            <g className="oversightArc">
                <animateTransform attributeName="transform" attributeType="XML" type="scale" dur="2s" keyTimes="0.0; 0.25; 0.8; 1.0" values="1.0; 1.03; 1.02; 1.0" begin="mouseover" additive="sum" restart="whenNotActive" />

                <path {...this.props}
                    fill="none"
                    stroke="#c7ee09"
                    strokeWidth="15" />
            </g>
        );
    }
}

export default asSVGArc(OversightArcSVG);