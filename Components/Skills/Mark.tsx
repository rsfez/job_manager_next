import { H5DarkGrey, H5Grey, H5Orange, H5Yellow } from "../../design/Text";
import React from "react";
import { map } from "./GradeMapper";

type MarkProps = {
  mark: number;
};

export enum Grade {
  weak,
  standard,
  good,
  great,
}

export const Mark = ({ mark }: MarkProps) => {
  let MarkComp: React.ElementType;
  switch (map({ mark })) {
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
