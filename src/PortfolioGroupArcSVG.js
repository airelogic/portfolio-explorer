import React, { Component } from 'react';
import asSVGArc from './GenericArcSVG';
import './PortfolioGroupArcSVG.css';

class PortfolioGroupArcSVG extends Component {

    constructor(props) {
        super(props);
        this.showAreaDetails = this.showAreaDetails.bind(this);
        this.hideAreaDetails = this.hideAreaDetails.bind(this);
    }

    showAreaDetails = () => {
        var toolTipInfo = {
            title: this.props.portfolioGroup.groupTitle,
            description: this.props.portfolioGroup.groupDescription
        };
        this.props.showToolTip(toolTipInfo);
    };

    hideAreaDetails = () => {
        this.props.hideToolTip();
    };

    render() {
        const {portfolioGroup, showToolTip, hideToolTip, ...passThroughProps} = this.props;
        return (
            
            <g className="oversightArc"  onMouseEnter={this.showAreaDetails} onMouseLeave={this.hideAreaDetails}>
                <animateTransform attributeName="transform" attributeType="XML" type="scale" dur="2s" keyTimes="0.0; 0.25; 0.8; 1.0" values="1.0; 1.03; 1.02; 1.0" begin="mouseover" additive="sum" restart="whenNotActive" />

                <path {...passThroughProps}
                    fill="none"
                    stroke="#c7ee09"
                    strokeWidth="15" />
            </g>
        );
    }
}

export default asSVGArc(PortfolioGroupArcSVG);