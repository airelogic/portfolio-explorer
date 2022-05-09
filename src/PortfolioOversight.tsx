import React, { Component, Fragment, useState } from "react";
import { PortfolioTheme } from ".";
import OversightCircle from "./OversightCircle";
import { PortFolioManagementTeamUI } from "./types";
import ToolTipOverlay from "./TootipOverlay";

export const PortfolioOversight: React.FC<{
  portfoliooversightonclick?: (areaId: string) => void;
  portfolioTheme: PortfolioTheme;
  oversight: PortFolioManagementTeamUI;
}> = ({ portfoliooversightonclick, portfolioTheme, oversight }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const onClick = () => {
    portfoliooversightonclick && portfoliooversightonclick(oversight.id);
  };

  return (
    <Fragment>
      {showTooltip && <ToolTipOverlay item={oversight} />}
      <g
        className="portfolioOversight"
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <g transform="translate(-15 -15)">
          <image height="30" width="30" xlinkHref={portfolioTheme.logo} />
        </g>
        <OversightCircle cx={0} cy={0} r={25} />
      </g>
    </Fragment>
  );
};

export default PortfolioOversight;
