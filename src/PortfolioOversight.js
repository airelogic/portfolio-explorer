import React, { Component } from 'react';
import OversightCircle from './OversightCircle';
import AireLogicCogSVG from './AireLogicCogSVG';

class PortfolioOversight extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tooltip: false
        };
        this.showPortfolioOversightDetails = this.showPortfolioOversightDetails.bind(this);
        this.hidePortfolioOversightDetails = this.hidePortfolioOversightDetails.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    showPortfolioOversightDetails = () => {
        var toolTipInfo = {
            title: this.props.portfolioOversight.title,
            description: this.props.portfolioOversight.description,
            team: this.props.portfolioOversight.team
        };
        this.props.showToolTip(toolTipInfo);
    };

    hidePortfolioOversightDetails = () => {
        this.props.hideToolTip();
    };

    onClick = () => {
        console.log('Oversight clicked');
        return this.props.portfoliooversightonclick ? this.props.portfoliooversightonclick(this.props.portfolioOversight.id) : undefined;
    }

    render() {
        const {portfolioOversight, portfoliooversightonclick, showToolTip, hideToolTip, ...passThroughProps} = this.props;
        return (
            <g {...passThroughProps} className="portfolioOversight" onClick={this.onClick} onMouseEnter={this.showPortfolioOversightDetails} onMouseLeave={this.hidePortfolioOversightDetails}>
                <AireLogicCogSVG transform="scale(2 2),translate(-62 -161)"/>
                <OversightCircle cx={0} cy={0} r={25}/>
            </g>
        );
    }
}

export default PortfolioOversight;