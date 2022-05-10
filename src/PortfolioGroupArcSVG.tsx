import React, { Fragment, SVGProps, useState } from "react";
import asSVGArc from "./GenericArcSVG";
import "./PortfolioGroupArcSVG.css";
import ToolTipOverlay from "./TootipOverlay";
import { PortfolioGroup, PortfolioTheme } from "./types";

interface PortfolioGroupArcSVGProps extends SVGProps<SVGGElement> {
  portfoliogrouponclick?: (group: PortfolioGroup) => void;
  portfolioGroup: PortfolioGroup;
  portfolioTheme: PortfolioTheme;
}

export const PortfolioGroupArcSVG: React.FC<PortfolioGroupArcSVGProps> = ({ portfoliogrouponclick, portfolioGroup, portfolioTheme, ...svgProps }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const portfolioGroupOnClick = () => {
    portfoliogrouponclick && portfoliogrouponclick(portfolioGroup);
  };

  return (
    <Fragment>
      {showTooltip && <ToolTipOverlay item={{ ...portfolioGroup, team: portfolioGroup.groupResponsiblePerson ?? [] }} />}
      <g
        className="oversightArc"
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

export default asSVGArc(PortfolioGroupArcSVG);
