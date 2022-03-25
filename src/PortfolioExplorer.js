import React, { Component } from 'react';
import PortfolioGroupArcSVG from './PortfolioGroupArcSVG';
import AreaArcSVG from './AreaArcSVG';
import PropTypes from 'prop-types';
import ToolTipOverlay from './TootipOverlay';

import './PortfolioExplorer.css';
import PortfolioExplorerGuides from './PortfolioExplorerGuides';
import PortfolioOversight from './PortfolioOversight';
import { PortfolioProvider } from './PortfolioContext';

export class PortfolioExplorer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            currentPortfolioItem: {},
            previousPortfolio: {},
            areas: [],
            areasSVG: [],
            groupsSVG: [],
            itemScaleMax: -1,
        };
        this.onShowToolTip = this.onShowToolTip.bind(this);
        this.onHideToolTip = this.onHideToolTip.bind(this);
    }

    onShowToolTip = (toolTipInfo) => {
        this.setState({ 
            show: true,
            toolTipInfo: toolTipInfo 
        });
    };

    onHideToolTip = () => {
        this.setState({
             show: false,
             currentPortfolioItem: {}
            });
    };

    componentDidUpdate(prevProps) {
        // Re-animate the pie slices
        if (this.props.portfolio !== prevProps.portfolio) {
            document.querySelectorAll("animateTransform").forEach(
                element => {
                    if (element.getAttribute("type") === "rotate") {
                        element.beginElement();
                    }
                }
            );
        }

        this.state.previousPortfolio = this.props.portfolio;
    }

    render() {
        const r1 = 60
        const strokeWidthMax = 170;

        let title = this.props.title;
        let portfolio = this.props.portfolio;

        if (this.state.previousPortfolio !== portfolio) {
            this.state.areas = [];
            portfolio.portfolioGroups.forEach(portfolioGroup => {
                this.state.areas = [].concat(this.state.areas, portfolioGroup.areas);
            });

            var itemScaleMax = -1;
            this.state.areas.forEach(portfolioItem => {
                this.state.itemScaleMax = portfolioItem.scale - 1 > itemScaleMax ? portfolioItem.scale - 1 : itemScaleMax;
            });

             // Get the max scale of all items
            const itemCount = this.state.areas.length;
            const spacing = itemCount > 1 ? 2 * itemCount : 0;
            const fullProjDeg = 360 / itemCount;
            const projDeg = (360 - spacing) / itemCount;

            // Get the max sized project
            this.state.areas.forEach(portfolioItem => { 
                this.state.itemScaleMax = portfolioItem.scale-1 > this.state.itemScaleMax ? portfolioItem.scale-1 : this.state.itemScaleMax;
            });

            this.state.areasSVG = [];
            this.state.groupsSVG = [];

            this.state.areas.forEach((portfolioItem, index) => {
                let strokeWidth = strokeWidthMax * ((portfolioItem.scale - 1) / itemScaleMax);
                let r2 = r1 + strokeWidth / 2;
                let pRot = index * fullProjDeg * -1;
                this.state.areasSVG.push(<AreaArcSVG portfolioTheme={this.props.portfolioTheme} areaonclick={this.props.areaonclick} showToolTip={this.onShowToolTip} hideToolTip={this.onHideToolTip} portfolioItem={portfolioItem} key={index} r1={r1} r2={r2} deg={projDeg} rot={pRot} strokeWidth={strokeWidth}/>);
            });
            var rotInitial = 0;
            portfolio.portfolioGroups.forEach((portfolioGroup, index) => { 
                var groupAreaCount = portfolioGroup.areas.length;
                var spacing = portfolio.portfolioGroups.length > 1 ? 3 : 0;
                var deg = (fullProjDeg * groupAreaCount) - spacing;
                this.state.groupsSVG.push(<PortfolioGroupArcSVG portfolioTheme={this.props.portfolioTheme} portfoliogrouponclick={this.props.portfoliogrouponclick} r={40} deg={deg} rot={rotInitial} key={index}  showToolTip={this.onShowToolTip} hideToolTip={this.onHideToolTip} portfolioGroup={portfolioGroup}/>);
                rotInitial -= (fullProjDeg * groupAreaCount);
            }); 
        }

        return (
            <React.Fragment>
                <div className="portfolioExplorer">
                    <h2>{title}</h2>
                    <PortfolioProvider>
                        <ToolTipOverlay visible={this.state.show} tooltipInfo={this.state.toolTipInfo} />
                        <svg viewBox="-250 -250 500 500" preserveAspectRatio="xMinYMin meet">
                            <PortfolioExplorerGuides visible={false} />
                            <PortfolioOversight portfolioTheme={this.props.portfolioTheme} portfolioOversight={portfolio.portFolioManagementTeam} showToolTip={this.onShowToolTip} hideToolTip={this.onHideToolTip} portfoliooversightonclick={this.props.portfoliooversightonclick} />
                            {this.state.areasSVG}
                            {this.state.groupsSVG}
                        </svg>
                    </PortfolioProvider>
                </div>
            </React.Fragment>
        );
    }
}

PortfolioExplorer.propTypes = {
    portfolio: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    portfolioTheme: PropTypes.object.isRequired
};

export default PortfolioExplorer;