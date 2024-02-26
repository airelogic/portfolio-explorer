import React, { Fragment, SVGProps, useState } from "react";
import asSVGArc from "./GenericArcSVG";
import "./AreaArcSVG.css";
import ToolTipOverlay from "./TootipOverlay";
import { PortfolioGroup, PortfolioTheme } from "./types";

interface PortfolioGroupArcSVGProps extends SVGProps<SVGGElement> {
  portfoliogrouponclick?: (group: PortfolioGroup) => void;
  portfolioGroup: PortfolioGroup;
  portfolioTheme: PortfolioTheme;
  showTeamMembers?: boolean;
}

export const AreaArcSVG: React.FC<PortfolioGroupArcSVGProps> = ({ showTeamMembers, portfoliogrouponclick, portfolioGroup, portfolioTheme, ...svgProps }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const portfolioGroupOnClick = () => {
    portfoliogrouponclick && portfoliogrouponclick(portfolioGroup);
  };

  return (
    <Fragment>
      {showTooltip && <ToolTipOverlay item={{ ...portfolioGroup, team: portfolioGroup.groupResponsiblePerson ?? [] }} showTeamMembers={showTeamMembers} />}
      <g
        className="areaArc"
        onClick={portfolioGroupOnClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >

        {/* @ts-ignore */}
        <path
          {...svgProps}
          fill="none"
          stroke={portfolioTheme.area}
          strokeWidth="15"
        />
      </g>
    </Fragment>
  );
};

export default asSVGArc(AreaArcSVG);
