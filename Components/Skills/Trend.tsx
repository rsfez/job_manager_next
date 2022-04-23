import { Trend as TrendEnum } from "../../data/Skill";
import Image from "next/image";

export type TrendProps = {
  trend: TrendEnum;
};

export const Trend = ({ trend }: TrendProps) => {
  let imageUrl, alt: string;
  if (trend == TrendEnum.none) return null;
  switch (trend) {
    case TrendEnum.superb:
      imageUrl = "/images/trend/superb.png";
      alt = "Superb";
      break;
    case TrendEnum.good:
      imageUrl = "/images/trend/good.png";
      alt = "Good";
      break;
    case TrendEnum.poor:
      imageUrl = "/images/trend/poor.png";
      alt = "Poor";
      break;
    case TrendEnum.terrible:
      imageUrl = "/images/trend/terrible.png";
      alt = "Terrible";
      break;
  }
  return (
    <Image src={imageUrl} alt={alt} layout={"raw"} width={"18"} height={"18"} />
  );
};
