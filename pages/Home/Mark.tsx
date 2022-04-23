import { H5DarkGrey, H5Grey, H5Orange, H5Yellow } from "../../design/Text";
import React from "react";

export type MarkProps = {
  mark: number;
  gradeMapper?: ({ mark }: { mark: number }) => Grade;
};

enum Grade {
  weak,
  standard,
  good,
  great,
}

const _gradeMapper = ({ mark }: { mark: number }): Grade => {
  if (mark < 6) return Grade.weak;
  if (mark < 12) return Grade.standard;
  if (mark < 16) return Grade.good;
  return Grade.great;
};

export const Mark = ({ mark, gradeMapper = _gradeMapper }: MarkProps) => {
  let MarkComp: React.ElementType;
  switch (gradeMapper({ mark })) {
    case Grade.weak:
      MarkComp = H5DarkGrey;
      break;
    case Grade.standard:
      MarkComp = H5Grey;
      break;
    case Grade.good:
      MarkComp = H5Yellow;
      break;
    case Grade.great:
      MarkComp = H5Orange;
      break;
  }
  return <MarkComp>{mark}</MarkComp>;
};
