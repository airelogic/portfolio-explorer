import React, { Component, Fragment, SVGProps, useState } from "react";
import "./ProjectArcSVG.css";
import ProjectLeadArcSVG from "./ProjectLeadArcSVG";
import AreaTeamArcSVG from "./ProjectTeamArcSVG";
import { PortfolioArea, PortfolioTheme } from "./types";
import ToolTipOverlay from "./TootipOverlay";

interface AreaArcSVGProps extends SVGProps<SVGGElement> {
  name?: string;
  theme: PortfolioTheme;
  areaonclick?: (area: PortfolioArea) => void;
  portfolioItem: PortfolioArea;
  portfolioTheme: PortfolioTheme;
  r1: number;
  r2: number;
  rot: number;
  deg: number;
showTeamMembers?: boolean;
}

export const ProjectArcSVG: React.FC<AreaArcSVGProps> = ({
showTeamMembers,
  areaonclick,
  portfolioItem,
  portfolioTheme,
  deg,
  r1,
  r2,
  rot,
  strokeWidth,
  ...svgProps
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const areaOnClick = () => {
    return areaonclick && areaonclick(portfolioItem);
  };

  const textRot = deg / -2;
  const textXPos = r1 * 1.3;
  // We want the text to be easy to read (so flip it rather than display upside down)
  const textFullRot = rot + textRot;
  const flipText = textFullRot < -90 && textFullRot > -270;
  const textLocalRot = flipText ? "rotate(180, " + textXPos + ",0)" : "";
  const textAnchor = flipText ? "end" : "start";

  const passThroughProps = { ...svgProps, deg, strokeWidth };
  return (
    <Fragment>
      {showTooltip && <ToolTipOverlay item={portfolioItem} showTeamMembers={showTeamMembers} />}
      <g
        className="project"
        transform={`rotate(${rot*-1},0,0)`}
        {...passThroughProps}
        onClick={areaOnClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* @ts-ignore */}
        <AreaTeamArcSVG
          r={r2}
          {...passThroughProps}
          portfolioTheme={portfolioTheme}
        />
        {/* @ts-ignore */}
        <ProjectLeadArcSVG
          r={r1}
          {...passThroughProps}
          portfolioTheme={portfolioTheme}
        />
        <g transform={`rotate(${textRot},0,0)`}>
          <text
            alignmentBaseline="middle"
            x={r1 * 1.3}
            y="0"
            textAnchor={textAnchor}
            fill="black"
            fontSize="8"
            transform={textLocalRot}
          >
            {portfolioItem.alias ? portfolioItem.alias : portfolioItem.title}
          </text>
        </g>
        {/* 
                TODO fix these hardcoded values. 
                This opaque arc is needed to prevent mouseover jitter 
            */}
        {/* @ts-ignore */}
        <AreaTeamArcSVG
          r={140}
          {...passThroughProps}
          strokeWidth={200}
          opacity={0}
          portfolioTheme={portfolioTheme}
        />
      </g>
    </Fragment>
  );
};

export default ProjectArcSVG;