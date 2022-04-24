import { assetPrefix } from "./constants/Paths";

export const Image = ({ ...props }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img {...props} src={`${assetPrefix}${props.src}`} alt={props.alt} />
);
