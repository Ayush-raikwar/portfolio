import { css } from 'styled-components';
import { constants } from './constants';

/* "Now" font faces used for body copy across pages */
export const nowFonts = css`
  @font-face {
    font-family: 'Now-font-reg';
    src: url('/fonts/Now-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Now-font-lt';
    src: url('/fonts/Now-Light.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;

/* Starry background with soft gold + blue glows, shared by inner pages */
export const starryBackground = css`
  overflow-x: clip;
  background-color: #05070c;
  background-image:
    radial-gradient(48rem 32rem at 10% 6%, rgba(254, 226, 99, 0.07), rgba(254, 226, 99, 0) 70%),
    radial-gradient(52rem 36rem at 92% 38%, rgba(72, 112, 255, 0.1), rgba(72, 112, 255, 0) 70%),
    linear-gradient(rgba(5, 8, 15, 0.2), rgba(5, 8, 15, 0.55)),
    url(${constants.images.bg_image});
  background-size: auto, auto, auto, cover;
  background-position: center, center, center, center top;
  background-repeat: no-repeat;
`;

/* Frosted-glass surface used for cards */
export const glassCard = css`
  background:
    linear-gradient(160deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.015)),
    rgba(10, 14, 24, 0.55);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  backdrop-filter: blur(14px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
`;
