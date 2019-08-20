import React, { Component } from 'react';
import { withSize } from 'react-sizeme';

import './ToolTipOverlay.css';

class ToolTipOverlay extends Component {

    render() {
        var cursorDistance = 20;
        var visible = this.props.visible;
        var { width, height } = this.props.size;
        var pageHeight = window.innerHeight;
        var pageWidth = window.innerWidth;
        
        var xOffset = this.props.x < 0.6 * pageWidth ? cursorDistance : -1 * (width + cursorDistance);
        var yOffset = this.props.y < 0.6 * pageHeight ? cursorDistance : -1 * (height + cursorDistance);
        return (
            <React.Fragment>
                {visible &&

                    <div id="tooltip" style={{left: `${this.props.x + xOffset}px`, top: `${this.props.y + yOffset}px`}}>
                        <h2>{this.props.tooltipInfo.title}</h2>
                        <p>{this.props.tooltipInfo.description}</p>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default withSize({ monitorHeight: true })(ToolTipOverlay);