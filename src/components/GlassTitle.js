import styled from 'styled-components';
import { styles } from '../utils/commonStyles';

/**
 * Section heading on a soft frosted-glass plate, with a warm glow
 * bleeding out from behind it and a thin gold accent underneath.
 * Centers itself; works on images, gradients and dark backgrounds.
 */
export const GlassTitle = styled.h2`
  position: relative;
  width: fit-content;
  max-width: calc(100% - 2rem);
  margin: 0 auto 2.75rem;
  padding: 0.7rem 2rem 0.85rem;

  font-size: clamp(1.6rem, 2.6vw, 2.35rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.01em;
  text-align: center;
  text-wrap: balance;
  color: ${styles.colors.white};
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.45);

  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.03)),
    rgba(10, 14, 24, 0.32);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  backdrop-filter: blur(14px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 1.25rem;
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);

  /* warm halo behind the plate */
  &::before {
    content: "";
    position: absolute;
    /* keep the halo's box close to the plate so it never causes sideways scroll */
    inset: -45% -12px;
    z-index: -1;
    background: radial-gradient(closest-side, rgba(254, 226, 99, 0.2), rgba(254, 226, 99, 0));
    filter: blur(20px);
    pointer-events: none;
  }

  /* thin gold accent under the text */
  &::after {
    content: "";
    display: block;
    width: 3rem;
    height: 3px;
    margin: 0.55rem auto 0;
    border-radius: 3px;
    background: linear-gradient(90deg, rgba(254, 226, 99, 0), ${styles.colors.theme_default}, rgba(254, 226, 99, 0));
  }

  @media (max-width: 600px) {
    padding: 0.6rem 1.25rem 0.75rem;
    margin-bottom: 2rem;
  }
`;
