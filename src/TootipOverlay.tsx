import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { SizeMe, withSize } from "react-sizeme";
import "./ToolTipOverlay.css";
import { PortfolioArea } from "./types";

interface ToolTipOverlayProps {
  item: Pick<
    PortfolioArea,
    "responsiblePerson" | "team" | "title" | "customer" | "description"
  >;
  size: { width: number; height: number };
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
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
  const mousePosition = useMousePosition();
  const cursorDistance = 20;
  const responsiblePerson = props.item && props.item.responsiblePerson;
  const { width, height } = props.size;
  const pageHeight = window.innerHeight;
  const pageWidth = window.innerWidth;

  const xOffset =
    mousePosition.x < 0.6 * pageWidth
      ? cursorDistance
      : -1 * (width + cursorDistance);
  const yOffset =
    mousePosition.y < 0.6 * pageHeight
      ? cursorDistance
      : -1 * (height + cursorDistance);

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
    <div
      id="tooltip"
      style={{
        left: `${mousePosition.x + xOffset}px`,
        top: `${mousePosition.y + yOffset}px`,
        position: 'absolute'
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

const WithSizeComponent: React.FC<Omit<ToolTipOverlayProps, "size">> = (
  props
) => {
  //@ts-ignore
  return (
    <SizeMe>
      {({ size }) => (
        <ToolTipOverlay
          size={{ height: size.height ?? 0, width: size.width ?? 0 }}
          {...props}
        />
      )}
    </SizeMe>
  );
};

export default WithSizeComponent;
