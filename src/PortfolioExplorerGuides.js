import React, { Component } from 'react';

import VerticalGuideSVG from './VerticalGuideSVG';
import HorizontalGuideSVG from './HorizontalGuideSVG';

class PortfolioExplorerGuides extends Component {

    xlines = [-250,-200, -150, -100, -50, 0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
    ylines = [-250,-200, -150, -100, -50, 0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];

    render() {
        const guides = this.props.visible;
        const xmin = -250;
        const ymin = -250;
        const xmax = 250;
        const ymax = 250;
        var xlines = [-250,-200, -150, -100, -50, 0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
        var ylines = [-250,-200, -150, -100, -50, 0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
        var xguides = guides ? xlines.map(function(offset) { return (<VerticalGuideSVG key={offset} y1={ymin} y2={ymax} xoff={offset}/>); }) : null;
        var yguides = guides ? ylines.map(function(offset) { return (<HorizontalGuideSVG key={offset} x1={xmin} x2={xmax} yoff={offset}/>); }) : null;
        return (
            <React.Fragment>
                {xguides}
                {yguides}
            </React.Fragment>
        );
    }
}

export default PortfolioExplorerGuides;