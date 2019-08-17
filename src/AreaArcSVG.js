import React, { Component } from 'react';
import AreaTeamArcSVG from './AreaTeamArcSVG';
import AreaLeadArcSVG from './AreaLeadArcSVG';
import PropTypes from 'prop-types';
import './AreaArcSVG.css';

class AreaArcSVG extends Component {

    render() {
        const {r1, r2, rot, strokeWidth, ...passThroughProps} = this.props;
        const textRot = this.props.deg / - 2;
        const textTrans = "rotate(" + textRot + ",0,0)";
        const rotTrans =  "rotate(" + rot + ",0,0)";
        return (
            <g className="portfolioArea">
                <animateTransform attributeName="transform" attributeType="XML" type="rotate" to={rot} dur="1s" begin="0s" repeatCount="1" fill="freeze"/>
                {/* <animateTransform id="portFolioAreaGrow" attributeName="transform" attributeType="XML" type="scale" from="1.0" to="1.2" dur="1s" begin="mouseover" additive="sum" fill="freeze" restart="whenNotActive"/>
                <animateTransform id="portFolioShrink" attributeName="transform" attributeType="XML" type="scale" from="1.0" to="0.8333" dur="1s" begin="mouseout" additive="sum" fill="freeze" restart="whenNotActive"/> */}
                <animateTransform attributeName="transform" attributeType="XML" type="scale" dur="2s" keyTimes="0.0; 0.25; 0.8; 1.0" values="1.0; 1.1; 1.03; 1.0" begin="mouseover" additive="sum" restart="whenNotActive"/>
                <AreaTeamArcSVG r={r2} strokeWidth={strokeWidth} {...passThroughProps} />
                <AreaLeadArcSVG r={r1} {...passThroughProps} />
                <text alignmentBaseline="middle" x={r1*1.3} y="0" fill="black" fontSize="8" transform={textTrans}>{this.props.name}</text>  
            </g>
        );
    }
}

AreaArcSVG.propTypes = {
    r1: PropTypes.number.isRequired,
    r2: PropTypes.number.isRequired,
    rot: PropTypes.number.isRequired,
    deg: PropTypes.number.isRequired,
    name: PropTypes.string
};

export default AreaArcSVG;