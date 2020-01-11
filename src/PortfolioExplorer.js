import React, { Component } from 'react';
import AireLogicCogSVG from './AireLogicCogSVG';
import OversightCircle from "./OversightCircle";
import PortfolioGroupArcSVG from './PortfolioGroupArcSVG';
import AreaArcSVG from './AreaArcSVG';
import PropTypes from 'prop-types';
import ToolTipOverlay from './TootipOverlay';

import './PortfolioExplorer.css';
import PortfolioExplorerGuides from './PortfolioExplorerGuides';

class PortfolioExplorer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            toolTipX: 0,
            toolTipY: 0,
            currentPortfolioItem: {},
        };
        this.onShowToolTip = this.onShowToolTip.bind(this);
        this.onHideToolTip = this.onHideToolTip.bind(this);
        this.onHoverMove = this.onHoverMove.bind(this);
    }

    onShowToolTip = (toolTipInfo) => {
        this.setState({ show: true });
        this.setState({toolTipInfo: toolTipInfo});
    };

    onHoverMove = (e) => {  
        if (this.state.show) {     
            this.setState({ toolTipX: e.pageX});
            this.setState({ toolTipY: e.pageY});
        }
    };

    onHideToolTip = () => {
        this.setState({ show: false });
        this.setState({ currentPortfolioItem: {} });
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
    }

    render() {
        const r1 = 60
        const strokeWidthMax = 170;

        let title = this.props.title;
        let portfolio = this.props.portfolio;
        
        // Initialise portfolio Objects
        var areas = [];
        // Get all the areas from the portfolio groups
        portfolio.portfolioGroups.forEach(portfolioGroup => { 
            areas = [].concat(areas, portfolioGroup.areas);
        }); 
        
        // Get the max scale of all items
        const itemCount = areas.length;
        const spacing = itemCount > 1 ? 2 * itemCount : 0;
        const fullProjDeg = 360 / itemCount;
        const projDeg = (360 - spacing) / itemCount;
        

        // Get the max sized project
        var itemScaleMax = -1;
        areas.forEach(portfolioItem => { 
            itemScaleMax = portfolioItem.scale-1 > itemScaleMax ? portfolioItem.scale-1 : itemScaleMax;
        });
        var areasSVG = [];
        var groupsSVG = [];
        areas.forEach((portfolioItem, index) => {
            let strokeWidth = strokeWidthMax * ((portfolioItem.scale - 1) / itemScaleMax);
            let r2 = r1 + strokeWidth / 2;
            let pRot = index * fullProjDeg * -1;
            areasSVG.push(<AreaArcSVG areaonclick={this.props.areaonclick} showToolTip={this.onShowToolTip} hideToolTip={this.onHideToolTip} onMouseMove={this.onHoverMove} portfolioItem={portfolioItem} key={index} r1={r1} r2={r2} deg={projDeg} rot={pRot} strokeWidth={strokeWidth}/>);
        });
        var rotInitial = 0;
        portfolio.portfolioGroups.forEach((portfolioGroup, index) => { 
            var groupAreaCount = portfolioGroup.areas.length;
            var spacing = portfolio.portfolioGroups.length > 1 ? 3 : 0;
            var deg = (fullProjDeg * groupAreaCount) - spacing;
            groupsSVG.push(<PortfolioGroupArcSVG portfoliogrouponclick={this.props.portfoliogrouponclick} r={40} deg={deg} rot={rotInitial} key={index}  showToolTip={this.onShowToolTip} hideToolTip={this.onHideToolTip} onMouseMove={this.onHoverMove} portfolioGroup={portfolioGroup}/>);
            rotInitial -= (fullProjDeg * groupAreaCount);
        }); 
        return (
            <React.Fragment>
                <div className="portfolioExplorer">
                    <h2>{title}</h2>
                    <ToolTipOverlay visible={this.state.show} x={this.state.toolTipX} y={this.state.toolTipY} tooltipInfo={this.state.toolTipInfo}/>
                    <svg viewBox="-250 -250 500 500" preserveAspectRatio="xMinYMin meet">
                        <PortfolioExplorerGuides visible={false}/>
                        <AireLogicCogSVG transform="scale(2 2),translate(-62 -161)"/>
                        <OversightCircle cx={0} cy={0} r={25}/>
                        {areasSVG}
                        {groupsSVG}
                                                        
                    </svg>
                </div>
            </React.Fragment>
        );
    }
}

PortfolioExplorer.propTypes = {
    portfolio: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
};

export default PortfolioExplorer;