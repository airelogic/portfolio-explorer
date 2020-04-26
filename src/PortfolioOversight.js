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
        this.portfolioOversightOnClick = this.portfolioOversightOnClick.bind(this);
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

    portfolioOversightOnClick = () => {
        return this.props.PortfolioOversightonclick ? this.props.PortfolioOversightonclick(this.props.portfolioItem.id) : undefined;
    }

    render() {
        const {portfolioOversight, ...passThroughProps} = this.props;
        return (
            <g {...passThroughProps} className="portfolioOversight" onClick={this.portfolioOversightOnClick} onMouseEnter={this.showPortfolioOversightDetails} onMouseLeave={this.hidePortfolioOversightDetails}>
                <AireLogicCogSVG transform="scale(2 2),translate(-62 -161)"/>
                <OversightCircle cx={0} cy={0} r={25}/>
            </g>
        );
    }
}

export default PortfolioOversight;