import React, { SVGProps } from "react";
import "./AreaArcSVG.css";
import { PortfolioArea, PortfolioTheme } from "./types";
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
}
export declare const AreaArcSVG: React.FC<AreaArcSVGProps>;
export default AreaArcSVG;
//# sourceMappingURL=AreaArcSVG.d.ts.map