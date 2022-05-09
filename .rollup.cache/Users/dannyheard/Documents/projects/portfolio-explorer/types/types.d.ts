export interface PortfolioTheme {
    item: string;
    itemLead: string;
    area: string;
    logo: string;
}
export interface Portfolio {
    portfolio?: string;
    portFolioManagementTeam?: PortFolioManagementTeamUI;
    portfolioGroups: PortfolioGroup[];
}
interface PortfolioItemBase {
    title: string;
    description: string;
}
export interface PortFolioManagementTeamUI extends PortfolioItemBase {
    id: string;
    team: Person[];
}
export interface PortfolioGroup extends PortfolioItemBase {
    groupResponsiblePerson?: Person[];
    areas: PortfolioArea[];
}
export interface Person {
    name?: string;
    email?: string;
}
export interface PortfolioArea extends PortfolioItemBase {
    id: string;
    startDate: Date | null;
    endDate: Date | null;
    customer?: string;
    dept?: string;
    responsiblePerson?: Person[];
    team: Person[];
    scale?: number;
}
export {};
//# sourceMappingURL=types.d.ts.map