import { Component } from "react";
import "./PortfolioExplorer.css";
import { Portfolio, PortfolioArea, PortfolioTheme } from "./types";
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
export declare class PortfolioExplorer extends Component<PortfolioExplorerProps, PortfolioExplorerState> {
    constructor(props: PortfolioExplorerProps);
    shouldComponentUpdate(nextProps: PortfolioExplorerProps, _: PortfolioExplorerState): boolean;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=PortfolioExplorer.d.ts.map