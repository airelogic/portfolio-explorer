import React, { Component } from "react";
import ProjectArcSVG from "./ProjectArcSVG";
import "./PortfolioExplorer.css";
import AreaArcSVG from "./AreaArcSVG";
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
  areaonclick: (area: PortfolioArea) => void;
  portfoliooversightonclick: (areaId: string) => void;
  groupOnClick: (group: PortfolioGroup) => void;
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

  render() {
    const r1 = 60;
    const strokeWidthMax = 170;

    const title = this.props.title;
    const { portfolioGroups: areas, portFolioManagementTeam: oversight } = this.props.portfolio;

    const projects = areas.reduce(
      (arr, group) => [...group.areas, ...arr],
      [] as PortfolioArea[]
    );

    // Get the max sized project
    const itemScaleMax = projects.reduce(
      (max, area) =>
        area.scale - 1 > max ? area.scale - 1 : max,
      -1
    );

    // Get the max scale of all items
    const spacing = projects.length > 1 ? 2 * projects.length : 0;
    const fullAreaDeg = 360 / projects.length;
    const projDeg = (360 - spacing) / projects.length;

    const projectsSVG = projects.map((portfolioItem, index) => {
      let strokeWidth =
        strokeWidthMax * ((portfolioItem.scale - 1) / itemScaleMax);
      let r2 = r1 + strokeWidth / 2;
      let pRot = index * fullAreaDeg * -1;
      return (
        <ProjectArcSVG
          portfolioTheme={this.props.portfolioTheme}
          areaonclick={this.props.areaonclick}
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

    var rotInitial = -fullAreaDeg;
    const areasSVG: Array<JSX.Element> = [];
    areas.forEach((portfolioGroup, index) => {
      var projectCount = portfolioGroup.areas.length;
      var spacing = areas.length > 1 ? 3 : 0;
      var deg = fullAreaDeg * projectCount - spacing;
      areasSVG.push(
        <AreaArcSVG
          portfolioTheme={this.props.portfolioTheme}
          portfoliogrouponclick={this.props.groupOnClick}
          r={40}
          deg={deg}
          rot={rotInitial}
          key={index}
          portfolioGroup={portfolioGroup}
        />
      );
      rotInitial -= fullAreaDeg * projectCount;
    });

    return (
      <React.Fragment>
        <div className="portfolioExplorer">
          <h2>{title}</h2>

          <svg viewBox="-250 -250 500 500" preserveAspectRatio="xMinYMin meet">
            {oversight && (
              <PortfolioOversight
                portfolioTheme={this.props.portfolioTheme}
                oversight={oversight}
                portfoliooversightonclick={this.props.portfoliooversightonclick}
              />
            )}
            {projectsSVG}
            {areasSVG}
          </svg>
        </div>
      </React.Fragment>
    );
  }
}
