import styled from "styled-components";

const Header = styled.div`
  text-overflow: ellipsis;
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

/**
 * Text header(
 *         {required String text,
 *         required String fontFamily,
 *         required double fontSize,
 *         required Color color}) =>
 *     Text(text.toUpperCase(),
 *         overflow: TextOverflow.ellipsis,
 *         style: TextStyle(
 *             fontFamily: fontFamily, fontSize: fontSize, color: color));
 *
 * Text text_({required String text, required double fontSize}) => Text(text,
 *     overflow: TextOverflow.ellipsis,
 *     style: TextStyle(fontSize: fontSize, color: const Color(white)));
 *
 * Text headerTitle({required String text, required Color color}) => header(
 *     text: text.toUpperCase(),
 *     fontFamily: 'Gunzo2',
 *     fontSize: h1FontSize,
 *     color: color);
 *
 * Text headerText({required String text, required Color color}) => header(
 *     text: text.toUpperCase(),
 *     fontFamily: 'Gunzo2',
 *     fontSize: h3FontSize,
 *     color: color);
 *
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
 * Text h5Grey({required String text}) => header(
 *     text: text.toUpperCase(),
 *     fontFamily: 'Adam',
 *     fontSize: h2FontSize,
 *     color: const Color(grey));
 *
 * Text h5DarkGrey({required String text}) => header(
 *     text: text.toUpperCase(),
 *     fontFamily: 'Adam',
 *     fontSize: h2FontSize,
 *     color: const Color(darkGrey));
 *
 * Text h5Orange({required String text}) => header(
 *     text: text.toUpperCase(),
 *     fontFamily: 'Adam',
 *     fontSize: h2FontSize,
 *     color: const Color(heatOrange));
 *
 * Text h5Yellow({required String text}) => header(
 *     text: text.toUpperCase(),
 *     fontFamily: 'Adam',
 *     fontSize: h2FontSize,
 *     color: const Color(secondaryYellow));
 *
 * Text p3({required String text}) => text_(text: text, fontSize: p3FontSize);
 */
