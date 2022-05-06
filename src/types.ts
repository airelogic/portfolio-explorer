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

export interface PortFolioManagementTeamUI {
  id?: string;
  title?: string;
  description?: string;
  team?: Person[];
}

export interface PortfolioGroup {
  groupTitle?: string;
  groupDescription?: string;
  groupResponsiblePerson?: Person[];
  areas: PortfolioArea[];
}

export interface Person {
  name?: string;
  email?: string;
}

export interface PortfolioArea {
  id: string;
  title: string;
  description: string;
  startDate: Date | null;
  endDate: Date | null;
  customer?: string;
  dept?: string;
  responsiblePerson?: Person[];
  team: Person[];
  scale?: number;
}
