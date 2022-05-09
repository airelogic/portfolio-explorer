import React from "react";
import "./ToolTipOverlay.css";
import { PortfolioArea } from "./types";
interface ToolTipOverlayProps {
    item: Pick<PortfolioArea, "responsiblePerson" | "team" | "title" | "customer" | "description">;
    size: {
        width: number;
        height: number;
    };
}
declare const WithSizeComponent: React.FC<Omit<ToolTipOverlayProps, "size">>;
export default WithSizeComponent;
//# sourceMappingURL=TootipOverlay.d.ts.map