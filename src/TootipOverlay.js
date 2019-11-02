import React, { Component } from 'react';
import { withSize } from 'react-sizeme';
import Avatar from 'react-avatar';

import './ToolTipOverlay.css';

class ToolTipOverlay extends Component {

    render() {
        var cursorDistance = 20;
        var visible = this.props.visible;
        var responsiblePerson = this.props.tooltipInfo && this.props.tooltipInfo.responsiblePerson;
        var { width, height } = this.props.size;
        var pageHeight = window.innerHeight;
        var pageWidth = window.innerWidth;
        
        var xOffset = this.props.x < 0.6 * pageWidth ? cursorDistance : -1 * (width + cursorDistance);
        var yOffset = this.props.y < 0.6 * pageHeight ? cursorDistance : -1 * (height + cursorDistance);
        var teamAvatars = [];
        if (this.props.tooltipInfo && this.props.tooltipInfo.team) {
            this.props.tooltipInfo.team.forEach((person, index) => {
                teamAvatars.push(<Avatar key={index} name={person.name} size={40} round="4px" email={person.email} className="teamAvatar"/>);
            });
        }
        var hasTeamMembers = responsiblePerson || teamAvatars.length > 0;
        return (
            <React.Fragment>
                {visible &&

                    <div id="tooltip" style={{left: `${this.props.x + xOffset}px`, top: `${this.props.y + yOffset}px`}}>
                        <h2>{this.props.tooltipInfo.title}</h2>
                        {this.props.tooltipInfo.customer &&
                            <div className="subtle">Customer: <span className="bold">{this.props.tooltipInfo.customer}</span></div>
                        }
                        <p>{this.props.tooltipInfo.description}</p>
                        {hasTeamMembers &&
                            <div className="team">
                                {responsiblePerson &&
                                    <React.Fragment>
                                        <Avatar name={this.props.tooltipInfo.responsiblePerson.name} size={40} round="4px" email={this.props.tooltipInfo.responsiblePerson.email}  className="responsiblePersonAvatar" />
                                        <div className="personName">{this.props.tooltipInfo.responsiblePerson.name}</div>
                                    </React.Fragment>
                                }
                                <div className="teamMembers">{teamAvatars}</div>
                            </div>               
                        }   
                            
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default withSize({ monitorHeight: true })(ToolTipOverlay);