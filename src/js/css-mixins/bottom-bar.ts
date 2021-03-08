import { css } from 'styled-components';

export const bottomBar = css`
  &::after {
    content: '';
    width: 100%;
    display: block;
    height: calc(1rem / 16);
    margin-top: 0.5rem;
    background-color: currentcolor;
  }
`