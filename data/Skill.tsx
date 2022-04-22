export enum Trend {
  none,
  superb,
  good,
  poor,
  terrible,
}

export type Skill = {
  name: string;
  mark: number;
  trend: Trend;
};
