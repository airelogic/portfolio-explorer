import React, { Component } from 'react';
import AreaTeamArcSVG from './AreaTeamArcSVG';
import AreaLeadArcSVG from './AreaLeadArcSVG';
import PropTypes from 'prop-types';

class AreaArcSVG extends Component {

    render() {
        const {r1, r2, rot, strokeWidth, ...passThroughProps} = this.props;
        const textRot = this.props.deg / - 2;
        const textTrans = "rotate(" + textRot + ",0,0)";
        const rotTrans =  "rotate(" + rot + ",0,0)";
        return (
            <g transform={rotTrans} opacity="0.9">
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