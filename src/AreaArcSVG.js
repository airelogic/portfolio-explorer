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
        this.areaOnClick = this.areaOnClick.bind(this);
    }

    showAreaDetails = () => {
        var toolTipInfo = {
            title: this.props.portfolioItem.title,
            description: this.props.portfolioItem.description,
            responsiblePerson: this.props.portfolioItem.responsiblePerson ? [this.props.portfolioItem.responsiblePerson] : null,
            customer: this.props.portfolioItem.customer,
            team: this.props.portfolioItem.team
        };
        this.props.showToolTip(toolTipInfo);
    };

    hideAreaDetails = () => {
        this.props.hideToolTip();
    };

    areaOnClick = () => {
        return this.props.areaonclick ? this.props.areaonclick(this.props.portfolioItem.id) : undefined;
    }

    render() {
        const {r1, r2, rot, strokeWidth, portfolioItem, showToolTip, hideToolTip, areaonclick, ...passThroughProps} = this.props;
        const textRot = this.props.deg / - 2;
        const textRotTx = "rotate(" + textRot + ",0,0)";
        const textXPos = r1 * 1.3;
        // We want the text to be easy to read (so flip it rather than display upside down)
        const textFullRot = rot + textRot;
        const flipText = textFullRot < -90 && textFullRot > -270;
        const textLocalRot = flipText ? "rotate(180, " + textXPos + ",0)": "";
        const textAnchor = flipText ? "end" : "start";
        return (
            <g className="portfolioArea" {...passThroughProps} onClick={this.areaOnClick} onMouseEnter={this.showAreaDetails} onMouseLeave={this.hideAreaDetails}>
                <animateTransform className="rot" attributeName="transform" attributeType="XML" type="rotate" to={rot} dur="1s" begin="0s" repeatCount="1" fill="freeze" restart="always"/>
                <animateTransform attributeName="transform" attributeType="XML" type="scale" dur="2s" keyTimes="0.0; 0.25; 0.8; 1.0" values="1.0; 1.1; 1.03; 1.0" begin="mouseover" additive="sum" restart="whenNotActive"/>
                <AreaTeamArcSVG r={r2} strokeWidth={strokeWidth} {...passThroughProps} />
                <AreaLeadArcSVG r={r1} {...passThroughProps} />
                <g transform={textRotTx}>
                    <text alignmentBaseline="middle" x={r1*1.3} y="0" textAnchor={textAnchor} fill="black" fontSize="8" transform={textLocalRot}>{this.props.portfolioItem.title}</text>  
                </g>
                {/* 
                    TODO fix these hardcoded values. 
                    This opaque arc is needed to prevent mouseover jitter 
                */}
                <AreaTeamArcSVG r={140} strokeWidth={200} {...passThroughProps} opacity={0}/>
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