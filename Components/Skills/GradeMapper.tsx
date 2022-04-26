import { Grade } from "./Mark";

export const map = ({ mark }: { mark: number }): Grade => {
  if (mark < 6) return Grade.weak;
  if (mark < 12) return Grade.standard;
  if (mark < 16) return Grade.good;
  return Grade.great;
};
