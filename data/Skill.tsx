export enum Trend {
  none,
  superb,
  good,
  poor,
  terrible,
}

const TREND_MAP = new Map<string, Trend>([
  ["superb", Trend.superb],
  ["good", Trend.good],
  ["poor", Trend.poor],
  ["terrible", Trend.terrible],
]);

export const map = ({ trend }: { trend: string }): Trend =>
  TREND_MAP.get(trend) ?? Trend.none;

export type Skill = {
  name: string;
  mark: number;
  trend: string;
};
