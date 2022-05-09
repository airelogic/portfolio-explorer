import React, { createRef, useEffect, useState } from "react";
import Avatar from "react-avatar";
import "./ToolTipOverlay.css";
import { PortfolioArea } from "./types";
import { Portal } from 'react-portal';

interface ToolTipOverlayProps {
  item: Pick<
    PortfolioArea,
    "responsiblePerson" | "team" | "title" | "customer" | "description"
  >
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>();
  useEffect(() => {
    const update = (e: MouseEvent) => {
      setMousePosition({ x: e.x, y: e.y });
    };
    window.addEventListener("mousemove", update);
    return () => {
      window.removeEventListener("mousemove", update);
    };
  }, []);
  return mousePosition;
};

const ToolTipOverlay: React.FC<ToolTipOverlayProps> = (props) => {
  const ref = createRef<HTMLDivElement>();
  const mousePosition = useMousePosition();
  const cursorDistance = 20;
  const responsiblePerson = props.item && props.item.responsiblePerson;
  const { offsetWidth, offsetHeight } = ref.current ?? { offsetWidth: 0, offsetHeight: 0};
  const pageHeight = window.innerHeight;
  const pageWidth = window.innerWidth;


  if(!mousePosition) return null;

  const xOffset =
    mousePosition.x < 0.6 * pageWidth
      ? cursorDistance
      : -1 * (offsetWidth + cursorDistance);
  const yOffset =
    mousePosition.y < 0.6 * pageHeight
      ? cursorDistance
      : -1 * (offsetHeight + cursorDistance);

  const teamAvatars =
    props.item.responsiblePerson?.map((person, index) => {
      return (
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
    }) ?? [];

  const responsiblePersons = props.item.team.map((person, index) => {
    return (
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

  const hasTeamMembers =
    responsiblePersons.length > 0 || teamAvatars.length > 0;

  return (
    <Portal>
    <div
      id="tooltip"
      style={{
        left: `${mousePosition.x + xOffset}px`,
        top: `${mousePosition.y + yOffset}px`
      }}
      ref={ref}
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
    </Portal>
  );
};

export default ToolTipOverlay;
