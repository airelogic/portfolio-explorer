import React, { Component } from 'react';
import OversightCircle from './OversightCircle';
import { PortfolioContext } from './PortfolioContext';

export class PortfolioOversight extends Component {

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
        return this.props.portfoliooversightonclick ? this.props.portfoliooversightonclick(this.props.portfolioOversight.id) : undefined;
    }

    render() {
        const {portfolioOversight, portfoliooversightonclick, showToolTip, hideToolTip, portfolioTheme, ...passThroughProps} = this.props;
        return (
            <React.Fragment>
            <PortfolioContext.Consumer>
                {(context) => (
                    <g {...passThroughProps} className="portfolioOversight" onClick={this.onClick} onMouseMove={context.onHoverMove} onMouseEnter={this.showPortfolioOversightDetails} onMouseLeave={this.hidePortfolioOversightDetails}>
                        <g transform="translate(-15 -15)">
                            <image height="30" width="30" xlinkHref={portfolioTheme.logo}/>
                        </g>
                        <OversightCircle cx={0} cy={0} r={25}/>
                    </g>
                )}
                </PortfolioContext.Consumer>
            </React.Fragment>
        );
    }
}

export default PortfolioOversight;