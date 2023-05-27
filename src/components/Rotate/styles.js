import styled, { css } from "styled-components";

const rotateVariant = {
  toLandscape: css`
    width: 100vw;
  `,
};

export const StyledRotate = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-black);
  opacity: 0.85;
  img {
    ${({ width }) => rotateVariant[width]}
  }
`;
