import styled, { css } from 'styled-components';
import { styles } from '../utils/commonStyles';

/*
  Pill buttons matching the homepage hero.
  They render an <a>; for internal routes use them with as={Link} to="/path".
*/
const base = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }
  &:focus-visible {
    outline: 2px solid ${styles.colors.theme_default};
    outline-offset: 3px;
  }
`;

export const PrimaryButton = styled.a`
  ${base}
  color: #14110a;
  border: none;
  background: linear-gradient(135deg, #ffe98a, ${styles.colors.theme_default} 55%, #f2c94c);
  box-shadow: 0 8px 24px rgba(254, 226, 99, 0.25);

  &:hover {
    box-shadow: 0 12px 32px rgba(254, 226, 99, 0.4);
  }
`;

export const GhostButton = styled.a`
  ${base}
  color: ${styles.colors.white};
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.25);

  &:hover {
    border-color: rgba(254, 226, 99, 0.7);
    background: rgba(254, 226, 99, 0.08);
  }
`;
