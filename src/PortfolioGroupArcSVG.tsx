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
      {showTooltip && <ToolTipOverlay item={{ ...portfolioGroup, team: [] }} />}
      <g
        className="oversightArc"
        onClick={portfolioGroupOnClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="scale"
          dur="2s"
          keyTimes="0.0; 0.25; 0.8; 1.0"
          values="1.0; 1.03; 1.02; 1.0"
          begin="mouseover"
          additive="sum"
          restart="whenNotActive"
        />
        {/* @ts-ignore */}
        <paths
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
