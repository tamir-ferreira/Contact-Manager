import styled, { css } from "styled-components";
import { ButtonVariants } from "../../interfaces";

const buttonVariants: ButtonVariants = {
  default: css`
    width: 100%;
    height: 48px;
    padding: 0 22px;
    font-size: var(--font-size-2);
  `,

  fixed_default: css`
    height: 48px;
    padding: 0 22px;
    font-size: var(--font-size-2);
    min-width: 208px;
  `,

  fixed_little: css`
    height: 48px;
    padding: 0 22px;
    font-size: var(--font-size-2);
    width: 155px;
  `,

  small: css`
    height: 32px;
    padding: 0 16px;
    font-size: var(--font-size-4);
  `,

  plus: css`
    width: 32px;
    height: 32px;
  `,

  colored: css`
    width: 100%;
    background-color: var(--color-primary);
    border: 0.125rem solid var(--color-primary);
    animation: pulsate-bck 1s ease-in-out infinite both;

    :hover {
      background-color: var(--color-primary-focus);
      border: 0.125rem solid var(--color-primary);
      animation: none;
    }
  `,

  gray: css`
    background-color: var(--color-gray-2);
    border: 0.125rem solid var(--color-gray-2);

    :hover {
      background-color: var(--color-gray-1);
      border: 0.125rem solid var(--color-gray-1);
      color: var(--color-gray-5);
    }
  `,

  dark_gray: css`
    color: var(--color-gray-0);
    background-color: var(--color-gray-3);

    :hover {
      background-color: var(--color-gray-2);
    }
  `,

  disabled: css`
    background-color: var(--color-secondary);
    border: 0.125rem solid var(--color-secondary);
    pointer-events: none;
  `,

  disabled_gray: css`
    background-color: var(--color-gray-2);
    border: 0.125rem solid var(--color-gray-2);
    pointer-events: none;
  `,
};

export const StyledButton = styled.button<{
  model: keyof ButtonVariants;
  color: keyof ButtonVariants;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: var(--border-radius-1);
  font-weight: var(--font-weight-2);
  border: none;
  color: var(--color-white);

  :hover {
    cursor: pointer;
  }

  @keyframes pulsate-bck {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.98);
    }
    100% {
      transform: scale(1);
    }
  }

  ${({ model }) => buttonVariants[model]}
  ${({ color }) => buttonVariants[color]}
`;
