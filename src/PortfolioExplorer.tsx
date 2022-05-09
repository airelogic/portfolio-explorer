import React, { Component } from "react";
import AreaArcSVG from "./AreaArcSVG";
import "./PortfolioExplorer.css";
import PortfolioGroupArcSVG from "./PortfolioGroupArcSVG";
import PortfolioOversight from "./PortfolioOversight";
import {
  Portfolio,
  PortfolioArea,
  PortfolioTheme,
  PortfolioGroup,
} from "./types";

interface PortfolioExplorerProps {
  title: string;
  portfolio: Portfolio;
  portfolioTheme: PortfolioTheme;
  areaonclick: (areaId: string) => void;
  portfoliooversightonclick: (areaId: string) => void;
  groupOnClick: (title: string) => void;
}

interface PortfolioExplorerState {
  show: boolean;
  currentPortfolioItem: PortfolioArea | null;
}

export class PortfolioExplorer extends Component<
  PortfolioExplorerProps,
  PortfolioExplorerState
> {
  constructor(props: PortfolioExplorerProps) {
    super(props);
  }

  shouldComponentUpdate(
    nextProps: PortfolioExplorerProps,
    _: PortfolioExplorerState
  ) {
    const oldAreaIds = this.props.portfolio.portfolioGroups
      .map((x) => x.areas.map((area) => area.id))
      .filter((x) => x);
    const newAreaIds = nextProps.portfolio.portfolioGroups.map((x) =>
      x.areas.map((area) => area.id)
    );

    return !(
      oldAreaIds.length === newAreaIds.length &&
      oldAreaIds.every((id) => newAreaIds.includes(id))
    );
  }

  componentDidUpdate() {
    document.querySelectorAll("animateTransform").forEach((element) => {
      if (element.getAttribute("type") === "rotate") {
        element.beginElement();
      }
    });
  }

  render() {
    const r1 = 60;
    const strokeWidthMax = 170;

    const title = this.props.title;
    const portfolio = this.props.portfolio;

    const areas = this.props.portfolio.portfolioGroups.reduce(
      (arr, group) => [...group.areas, ...arr],
      [] as PortfolioArea[]
    );

    // Get the max sized project
    const itemScaleMax = areas.reduce(
      (max, area) =>
        area.scale - 1 > max ? area.scale - 1 : max,
      -1
    );

    // Get the max scale of all items
    const spacing = areas.length > 1 ? 2 * areas.length : 0;
    const fullProjDeg = 360 / areas.length;
    const projDeg = (360 - spacing) / areas.length;

    const areasSVG = areas.map((portfolioItem, index) => {
      let strokeWidth =
        strokeWidthMax * ((portfolioItem.scale - 1) / itemScaleMax);
      let r2 = r1 + strokeWidth / 2;
      let pRot = index * fullProjDeg * -1;
      return (
        <AreaArcSVG
          portfolioTheme={this.props.portfolioTheme}
          areaonclick={(area) => this.props.areaonclick(area.id)}
          portfolioItem={portfolioItem}
          key={index}
          r1={r1}
          r2={r2}
          deg={projDeg}
          rot={pRot}
          strokeWidth={strokeWidth}
          theme={this.props.portfolioTheme}
        />
      );
    });

    var rotInitial = 0;
    const groupsSVG: Array<JSX.Element> = [];
    portfolio.portfolioGroups.forEach((portfolioGroup, index) => {
      var groupAreaCount = portfolioGroup.areas.length;
      var spacing = portfolio.portfolioGroups.length > 1 ? 3 : 0;
      var deg = fullProjDeg * groupAreaCount - spacing;
      groupsSVG.push(
        <PortfolioGroupArcSVG
          portfolioTheme={this.props.portfolioTheme}
          portfoliogrouponclick={(group: PortfolioGroup) =>
            this.props.areaonclick(group.title)
          }
          r={40}
          deg={deg}
          rot={rotInitial}
          key={index}
          portfolioGroup={portfolioGroup}
        />
      );
      rotInitial -= fullProjDeg * groupAreaCount;
    });

    return (
      <React.Fragment>
        <div className="portfolioExplorer">
          <h2>{title}</h2>

          <svg viewBox="-250 -250 500 500" preserveAspectRatio="xMinYMin meet">
            {portfolio.portFolioManagementTeam && (
              <PortfolioOversight
                portfolioTheme={this.props.portfolioTheme}
                oversight={portfolio.portFolioManagementTeam}
                portfoliooversightonclick={this.props.portfoliooversightonclick}
              />
            )}
            {areasSVG}
            {groupsSVG}
          </svg>
        </div>
      </React.Fragment>
    );
  }
}
