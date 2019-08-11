import React, { Component } from 'react';
class OversightCircle extends Component {

    render() {
        return (
            <circle
                cx={this.props.cx}
                cy={this.props.cy}
                r={this.props.r}
                fill="none"
                stroke="#a9ae93"
                strokeWidth={10}
                strokeDasharray="2 2"
                strokeOpacity={0.5}
            />
        );
    }
}

export default OversightCircle;