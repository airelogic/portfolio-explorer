import React, { Component } from 'react';
import AireLogicCogSVG from './AireLogicCogSVG';
import OversightCircle from "./OversightCircle";
import OversighArcSVG from './OversighArcSVG';
import VerticalGuideSVG from './VerticalGuideSVG';
import HorizontalGuideSVG from './HorizontalGuideSVG';
import AreaArcSVG from './AreaArcSVG';
import PropTypes from 'prop-types';
import ToolTipOverlay from './TootipOverlay';

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

    onShowToolTip = (portFolioId) => {
        this.setState({ show: true });
        let item = this.props.portfolio.find(function(portfolioItem) {
            return portfolioItem.id == portFolioId;
        });
        this.setState({currentPortfolioItem: item});
        console.log('Showing project details for ' + portFolioId + '\n' + item.title);
    };

    onHoverMove = (e) => {  
        if (this.state.show) {      
            this.setState({ toolTipX: e.pageX + 10 });
            this.setState({ toolTipY: e.pageY + 10 });
        }
    };

    onHideToolTip = () => {
        this.setState({ show: false });
        this.setState({ currentPortfolioItem: {} });
        console.log('Hiding project details');
    };

    render() {
        let title = this.props.title;
        let portfolio = this.props.portfolio;
        const xmin = -250;
        const ymin = -250;
        const xmax = 250;
        const ymax = 250;
        const guides = false;
        var xlines = [-250,-200, -150, -100, -50, 0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
        var ylines = [-250,-200, -150, -100, -50, 0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
        var xguides = guides ? xlines.map(function(offset) { return (<VerticalGuideSVG key={offset} y1={ymin} y2={ymax} xoff={offset}/>); }) : null;
        var yguides = guides ? ylines.map(function(offset) { return (<HorizontalGuideSVG key={offset} x1={xmin} x2={xmax} yoff={offset}/>); }) : null;
        const itemCount = portfolio.length;
        const spacing = 2 * itemCount;
        const fullProjDeg = 360 / itemCount;
        const projDeg = (360 - spacing) / itemCount;
        const r1 = 60
        const strokeWidthMax = 170;
        let projects = [];
        var divStyle = {
            fontFamily: 'verdana',
            backgroundColor: 'whitesmoke',
            maxWidth: '800px'
        };
        var itemScaleMax = -1;
        portfolio.forEach(portfolioItem => { 
            itemScaleMax = portfolioItem.scale-1 > itemScaleMax ? portfolioItem.scale-1 : itemScaleMax;
        });
        portfolio.forEach((portfolioItem, index) => {
            let strokeWidth = strokeWidthMax * ((portfolioItem.scale - 1) / itemScaleMax);
            let r2 = r1 + strokeWidth / 2;
            let pRot = index * fullProjDeg;
            projects.push(<AreaArcSVG showToolTip={this.onShowToolTip} hideToolTip={this.onHideToolTip} onMouseMove={this.onHoverMove} portFolioId={portfolioItem.id} key={index} r1={r1} r2={r2} deg={projDeg} rot={pRot} name={portfolioItem.title} strokeWidth={strokeWidth}/>);
        });
        return (
            <React.Fragment>
                <div style={divStyle}>
                    <h2>{title}</h2>
                    <ToolTipOverlay visible={this.state.show} x={this.state.toolTipX} y={this.state.toolTipY} tooltipInfo={this.state.currentPortfolioItem}/>
                    <svg viewBox="-250 -250 500 500" preserveAspectRatio="xMinYMin meet">
                        {xguides}
                        {yguides}  
                        <AireLogicCogSVG transform="scale(2 2),translate(-62 -161)"/>
                        <OversightCircle cx={0} cy={0} r={25}/>
                        <OversighArcSVG r={40} deg={87} rot={0}/>
                        <OversighArcSVG r={40} deg={87} rot={-90}/>
                        <OversighArcSVG r={40} deg={87} rot={-180}/>
                        <OversighArcSVG r={40} deg={87} rot={-270}/>
                        {projects}                                
                    </svg>
                </div>
            </React.Fragment>
        );
    }
}

PortfolioExplorer.propTypes = {
    portfolio: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};

export default PortfolioExplorer;