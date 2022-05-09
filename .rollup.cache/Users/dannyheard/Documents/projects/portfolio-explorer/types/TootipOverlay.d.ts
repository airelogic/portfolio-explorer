import React from "react";
import "./ToolTipOverlay.css";
import { PortfolioArea } from "./types";
interface ToolTipOverlayProps {
    item: Pick<PortfolioArea, "responsiblePerson" | "team" | "title" | "customer" | "description">;
}
declare const ToolTipOverlay: React.FC<ToolTipOverlayProps>;
export default ToolTipOverlay;
//# sourceMappingURL=TootipOverlay.d.ts.map