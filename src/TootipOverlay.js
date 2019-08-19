import React, { Component } from 'react';

import './ToolTipOverlay.css';

class ToolTipOverlay extends Component {

    render() {
        const visible = this.props.visible;
        return (
            <React.Fragment>
                {visible &&

                    <div id="tooltip" style={{left: `${this.props.x}px`, top: `${this.props.y}px`}}>
                        <h2>{this.props.tooltipInfo.title}</h2>
                        <p>{this.props.tooltipInfo.description}</p>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default ToolTipOverlay;