import { createGlobalStyle } from "styled-components";

export const StyledTypography = createGlobalStyle`

    * {
      font-family: var(--font-family-1);
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }

    :root {
      --font-family-1: "Inter", sans-serif;

      --font-size-1: 18px;
      --font-size-2: 16px;
      --font-size-3: 14px;
      --font-size-4: 12px;

      --font-weigth-1: 700;
      --font-weigth-2: 400;
    }

  .font-title-1 {
    font-size: var(--font-size-1);
    font-weight: var(--font-weigth-1);
  }

  .font-title-2 {
    font-size: var(--font-size-2);
    font-weight: var(--font-weigth-1);
  }

  .font-title-2-regular {
    font-size: var(--font-size-2);
    font-weight: var(--font-weigth-2);
  }
  
  .font-title-3 {
    font-size: var(--font-size-3);
    font-weight: var(--font-weigth-1);
  }

  .font-headline {
    font-size: var(--font-size-4);
    font-weight: var(--font-weigth-2);
  }

  .font-headline-gray {
    font-size: var(--font-size-4);
    font-weight: var(--font-weigth-2);
    color: var(--color-gray-1);
  }
  
  .font-headline-bold {
    font-size: var(--font-size-4);
    font-weight: var(--font-weigth-1);
  }
  
  .font-headline-italic {
    font-size: var(--font-size-4);
    font-weight: var(--font-weigth-2);
    font-style: italic;
  }
`;
