import React, { Component } from 'react';
class HorizontalGuideSVG extends Component {

    render() {
        const yoff = this.props.yoff ? this.props.yoff : 0;
        return (
            <React.Fragment>
            <text y={yoff - 2} x={this.props.x1 + 2}
                fill="#666666"
                font="ubuntu"
                font-size="8px">{yoff}</text>
            <line
                y1={yoff}
                y2={yoff}
                x1={this.props.x1}
                x2={this.props.x2}
            stroke="#cccccc"
            strokeWidth={0.5}
            strokeOpacity={0.50} />
            </React.Fragment>
        );
    }
}

export default HorizontalGuideSVG;