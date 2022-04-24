import styled from "styled-components";
import {
  darkGrey,
  grey,
  heatOrange,
  secondaryYellow,
  white,
} from "./constants/colors";
import React from "react";
import { h5FontSize, p3FontSize } from "./constants/dimensions";

const Header = styled.div`
  text-overflow: ellipsis;
`;

const Text = styled.div<{ fontSize?: string }>`
  font-size: ${(props) => props.fontSize ?? "medium"};
  font-family: "Inter", sans-serif;
  text-overflow: ellipsis;
  color: ${white};
`;

export const HeaderTitle = styled(Header)<{ color: string }>`
  text-transform: uppercase;
  font-family: "Gunzo2", sans-serif;
  font-size: x-large;
  color: ${(props) => props.color};
`;

export const HeaderText = styled(Header)<{ color: string }>`
  text-transform: uppercase;
  font-family: "Gunzo2", sans-serif;
  font-size: medium;
  color: ${(props) => props.color};
`;

const H = styled(Header)`
  font-family: "Adam", sans-serif;
  align-self: flex-end;
`;

const H5 = styled(H)`
  font-size: ${h5FontSize};
  line-height: 16px;
`;

export const H5Grey = styled(H5)`
  color: ${grey};
`;

export const H5DarkGrey = styled(H5)`
  color: ${darkGrey};
`;

export const H5Orange = styled(H5)`
  color: ${heatOrange};
`;

export const H5Yellow = styled(H5)`
  color: ${secondaryYellow};
`;

export const P3 = styled(Text)`
  font-size: ${p3FontSize};
`;

/**
 * Text h2Yellow({required String text}) => header(
 *     text: text.toUpperCase(),
 *     fontFamily: 'Gunzo2',
 *     fontSize: h2FontSize,
 *     color: const Color(secondaryYellow));
 *
 * Text h3Yellow({required String text}) => header(
 *     text: text.toUpperCase(),
 *     fontFamily: 'Gunzo2',
 *     fontSize: h3FontSize,
 *     color: const Color(secondaryYellow));
 *
 * Text h4Yellow({required String text}) => header(
 *     text: text.toUpperCase(),
 *     fontFamily: 'Gunzo2',
 *     fontSize: h4FontSize,
 *     color: const Color(secondaryYellow));
 *
 *
 *
 * Text h5Yellow({required String text}) => header(
 *     text: text.toUpperCase(),
 *     fontFamily: 'Adam',
 *     fontSize: h2FontSize,
 *     color: const Color(secondaryYellow));
 */
