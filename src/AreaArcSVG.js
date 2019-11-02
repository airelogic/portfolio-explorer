import React, { Component } from 'react';
import AreaTeamArcSVG from './AreaTeamArcSVG';
import AreaLeadArcSVG from './AreaLeadArcSVG';
import PropTypes from 'prop-types';
import './AreaArcSVG.css';

class AreaArcSVG extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tooltip: false,
            currentPortfolioItem: {},
        };
        this.showAreaDetails = this.showAreaDetails.bind(this);
        this.hideAreaDetails = this.hideAreaDetails.bind(this);
    }

    showAreaDetails = () => {
        var toolTipInfo = {
            title: this.props.portfolioItem.title,
            description: this.props.portfolioItem.description,
            responsiblePerson: [this.props.portfolioItem.responsiblePerson],
            team: this.props.portfolioItem.team
        };
        this.props.showToolTip(toolTipInfo);
    };

    hideAreaDetails = () => {
        this.props.hideToolTip();
    };

    render() {
        const {r1, r2, rot, strokeWidth, portfolioItem, showToolTip, hideToolTip, ...passThroughProps} = this.props;
        const textRot = this.props.deg / - 2;
        const textRotTx = "rotate(" + textRot + ",0,0)";
        //const textDirection = rot > 180 ? "rtl" : "ltr"; trying to reverse text - needs more thought
        const textDirection = "ltr";
        return (
            <g className="portfolioArea" {...passThroughProps} onMouseEnter={this.showAreaDetails} onMouseLeave={this.hideAreaDetails}>
                <animateTransform attributeName="transform" attributeType="XML" type="rotate" to={rot} dur="1s" begin="0s" repeatCount="1" fill="freeze"/>
                <animateTransform attributeName="transform" attributeType="XML" type="scale" dur="2s" keyTimes="0.0; 0.25; 0.8; 1.0" values="1.0; 1.1; 1.03; 1.0" begin="mouseover" additive="sum" restart="whenNotActive"/>
                <AreaTeamArcSVG r={r2} strokeWidth={strokeWidth} {...passThroughProps} />
                <AreaLeadArcSVG r={r1} {...passThroughProps} />
                <text alignmentBaseline="middle" direction={textDirection} x={r1*1.3} y="0" fill="black" fontSize="8" transform={textRotTx}>{this.props.portfolioItem.title}</text>  
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