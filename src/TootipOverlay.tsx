import React from "react";
import Avatar from "react-avatar";
import { withSize } from "react-sizeme";
import { usePortfolioContext } from "./PortfolioContext";
import "./ToolTipOverlay.css";
import { PortfolioArea } from "./types";

interface ToolTipOverlayProps {
  item: PortfolioArea | null;
  size: { width: number; height: number };
}

const ToolTipOverlay: React.FC<ToolTipOverlayProps> = (props) => {
  const context = usePortfolioContext();
  var cursorDistance = 20;
  var responsiblePerson = props.item && props.item.responsiblePerson;
  var { width, height } = props.size;
  var pageHeight = window.innerHeight;
  var pageWidth = window.innerWidth;

  var xOffset =
    context.mousePosition.x < 0.6 * pageWidth
      ? cursorDistance
      : -1 * (width + cursorDistance);
  var yOffset =
    context.mousePosition.y < 0.6 * pageHeight
      ? cursorDistance
      : -1 * (height + cursorDistance);
  var teamAvatars = [];
  var responsiblePersons = [];
  
  if (props.item && props.item.responsiblePerson) {
    props.item.responsiblePerson.forEach((person, index) => {
      responsiblePersons.push(
        <React.Fragment key={index}>
          <Avatar
            name={person.name}
            size="40"
            round="4px"
            email={person.email}
            className="responsiblePersonAvatar"
          />
          <div className="personName">{person.name}</div>
        </React.Fragment>
      );
    });
  }
  if (props.item && props.item.team) {
    props.item.team.forEach((person, index) => {
      teamAvatars.push(
        <Avatar
          key={index}
          name={person.name}
          size="40"
          round="4px"
          email={person.email}
          className="teamAvatar"
        />
      );
    });
  }
  
  const hasTeamMembers = responsiblePersons.length > 0 || teamAvatars.length > 0;
  
  return (
    <div
      id="tooltip"
      style={{
        left: `${context.mousePosition.x + xOffset}px`,
        top: `${context.mousePosition.y + yOffset}px`,
      }}
    >
      <h2>{props.item.title}</h2>
      {props.item.customer && (
        <div className="subtle italic">{props.item.customer}</div>
      )}
      <p>{props.item.description}</p>
      {hasTeamMembers && (
        <div className="team">
          {responsiblePerson && (
            <div className="responsiblePersons">{responsiblePersons}</div>
          )}
          <div className="teamMembers">{teamAvatars}</div>
        </div>
      )}
    </div>
  );
};

export default withSize({ monitorHeight: true })(ToolTipOverlay);
