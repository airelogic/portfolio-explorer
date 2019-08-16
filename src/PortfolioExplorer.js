import React, { Component } from 'react';
import AireLogicCogSVG from './AireLogicCogSVG';
import OversightCircle from "./OversightCircle";
import OversighArcSVG from './OversighArcSVG';
import VerticalGuideSVG from './VerticalGuideSVG';
import HorizontalGuideSVG from './HorizontalGuideSVG';
import AreaArcSVG from './AreaArcSVG';
import PropTypes from 'prop-types';

class PortfolioExplorer extends Component {

    render() {
        let title = this.props.title;
        let portfolio = this.props.portfolio;
        console.log("Here");
        console.log(portfolio);
        const xmin = -250;
        const ymin = -250;
        const xmax = 250;
        const ymax = 250;
        const guides = true;
        var xlines = [-250,-200, -150, -100, -50, 0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
        var ylines = [-250,-200, -150, -100, -50, 0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
        var xguides = guides ? xlines.map(function(offset) { return (<VerticalGuideSVG y1={ymin} y2={ymax} xoff={offset}/>); }) : null;
        var yguides = guides ? ylines.map(function(offset) { return (<HorizontalGuideSVG x1={xmin} x2={xmax} yoff={offset}/>); }) : null;
        const projectNumber = portfolio.length;
        const fullProjDeg = 360 / projectNumber;
        const projDeg = 300 / projectNumber;
        const r1 = 60
        const strokeWidthMax = 170;
        let projects = [];
        var divStyle = {
            fontFamily: 'helvetica verdana',
            backgroundColor: 'whitesmoke',
            maxWidth: '800px'
          };
        for (let p = 0; p < projectNumber; p++) {
            var strokeWidth = (strokeWidthMax / projectNumber) * Math.round(Math.random()*projectNumber);
            var r2 = r1 + 0 + strokeWidth / 2;
            var pRot = p*fullProjDeg;
            var name = portfolio[p] ? portfolio[p].title : "project " + (p+1);
            projects.push(<AreaArcSVG r1={r1} r2={r2} deg={projDeg} rot={pRot} name={name} strokeWidth={strokeWidth}/>);
        }
        return (
            <React.Fragment>
                <h2>{title}</h2>
                <div style={divStyle}>
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

// PortfolioExplorer.propTypes = {
//     portfolio: PropTypes.isRequired,
// };

export default PortfolioExplorer;