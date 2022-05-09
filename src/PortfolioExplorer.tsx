import React, { Component, Fragment } from "react";
import AreaArcSVG from "./AreaArcSVG";
import { PortfolioContextProvider } from "./PortfolioContext";
import "./PortfolioExplorer.css";
import PortfolioGroupArcSVG from "./PortfolioGroupArcSVG";
import PortfolioOversight from "./PortfolioOversight";
import ToolTipOverlay from "./TootipOverlay";
import { Portfolio, PortfolioArea, PortfolioTheme } from "./types";


interface PortfolioExplorerProps {
  title: string;
  portfolio: Portfolio;
  portfolioTheme: PortfolioTheme;
  areaonclick: (areaId: string) => void;
  portfoliooversightonclick: (areaId: string) => void;
  portfolioAreaOnClick: (title: string) => void;
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
    this.state = {
      show: false,
      currentPortfolioItem: null,
    };
    this.onShowToolTip = this.onShowToolTip.bind(this);
    this.onHideToolTip = this.onHideToolTip.bind(this);
  }

  onShowToolTip = (toolTipInfo: PortfolioArea) => {
    this.setState({
      show: true,
      currentPortfolioItem: toolTipInfo,
    });
  };

  onHideToolTip = () => {
    this.setState({
      show: false,
      currentPortfolioItem: null,
    });
  };

  shouldComponentUpdate(
    nextProps: PortfolioExplorerProps,
    nextState: PortfolioExplorerState
  ) {
    const oldAreaIds = this.props.portfolio.portfolioGroups.map((x) =>
      x.areas.map((area) => area.id)
    ).filter(x => x);
    const newAreaIds = nextProps.portfolio.portfolioGroups.map((x) =>
      x.areas.map((area) => area.id)
    )

    return !(
      oldAreaIds.length === newAreaIds.length &&
      oldAreaIds.every(id => newAreaIds.includes(id))
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
        area.scale ? (area.scale - 1 > max ? area.scale - 1 : max) : max,
      -1
    );

    // Get the max scale of all items
    const spacing = areas.length > 1 ? 2 * areas.length : 0;
    const fullProjDeg = 360 / areas.length;
    const projDeg = (360 - spacing) / areas.length;

    const areasSVG = areas.map((portfolioItem, index) => {
      let strokeWidth =
        strokeWidthMax * (((portfolioItem.scale ?? 1) - 1) / itemScaleMax);
      let r2 = r1 + strokeWidth / 2;
      let pRot = index * fullProjDeg * -1;
      return (
        <>
          {/* @ts-ignore */}
          <AreaArcSVG
            portfolioTheme={this.props.portfolioTheme}
            areaonclick={this.props.areaonclick}
            showToolTip={this.onShowToolTip}
            hideToolTip={this.onHideToolTip}
            portfolioItem={portfolioItem}
            key={index}
            r1={r1}
            r2={r2}
            deg={projDeg}
            rot={pRot}
            strokeWidth={strokeWidth}
          />
        </>
      );
    });

    var rotInitial = 0;
    const groupsSVG: Array<JSX.Element> = [];
    portfolio.portfolioGroups.forEach((portfolioGroup, index) => {
      var groupAreaCount = portfolioGroup.areas.length;
      var spacing = portfolio.portfolioGroups.length > 1 ? 3 : 0;
      var deg = fullProjDeg * groupAreaCount - spacing;
      groupsSVG.push(
        <>
          {/* @ts-ignore */}
          <PortfolioGroupArcSVG
            portfolioTheme={this.props.portfolioTheme}
            portfoliogrouponclick={this.props.areaonclick}
            r={40}
            deg={deg}
            rot={rotInitial}
            key={index}
            showToolTip={this.onShowToolTip}
            hideToolTip={this.onHideToolTip}
            portfolioGroup={portfolioGroup}
          />
        </>
      );
      rotInitial -= fullProjDeg * groupAreaCount;
    });

    return (
      <React.Fragment>
        <div className="portfolioExplorer">
          <h2>{title}</h2>
          <PortfolioContextProvider>
            <Fragment>
              {this.state.show && this.state.currentPortfolioItem && (
                <ToolTipOverlay item={this.state.currentPortfolioItem} />
              )}
              <svg
                viewBox="-250 -250 500 500"
                preserveAspectRatio="xMinYMin meet"
              >
                {/* @ts-ignore */}
                <PortfolioOversight
                  portfolioTheme={this.props.portfolioTheme}
                  portfolioOversight={portfolio.portFolioManagementTeam}
                  showToolTip={this.onShowToolTip}
                  hideToolTip={this.onHideToolTip}
                  portfoliooversightonclick={
                    this.props.portfoliooversightonclick
                  }
                />
                {areasSVG}
                {groupsSVG}
              </svg>
            </Fragment>
          </PortfolioContextProvider>
        </div>
      </React.Fragment>
    );
  }
}