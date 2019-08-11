import React, { Component } from 'react';
class VerticalGuideSVG extends Component {

    render() {
        const xoff = this.props.xoff ? this.props.xoff : 0;
        return (
            <React.Fragment>
            <text x={xoff + 2} y={this.props.y1 + 10}
                fill="#666666"
                font="ubuntu"
                font-size="8px">{xoff}</text>
            <line
                x1={xoff}
                x2={xoff}
                y1={this.props.y1}
                y2={this.props.y2}
            stroke="#cccccc"
            strokeWidth={0.5}
            strokeOpacity={0.50} />
            </React.Fragment>
        );
    }
}

export default VerticalGuideSVG;