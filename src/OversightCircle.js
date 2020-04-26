import React, { Component } from 'react';
class OversightCircle extends Component {

    render() {
        return (
            <React.Fragment>
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
            <circle
                cx={this.props.cx}
                cy={this.props.cy}
                r={this.props.r + 8}
                fill="#a9ae93"
                stroke="#a9ae93"
                strokeWidth={0}
                strokeDasharray="2 2"
                strokeOpacity={0}
                opacity={0}
            />
            </React.Fragment>
        );
    }
}

export default OversightCircle;