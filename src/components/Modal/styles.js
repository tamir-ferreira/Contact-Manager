import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-opacity);

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 370px;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 20px;
      border-radius: var(--border-radius-1) var(--border-radius-1) 0 0;
      background-color: var(--color-gray-2);
      color: var(--color-gray-0);

      > h4 {
        color: var(--color-gray-0);
      }

      > button {
        font-size: 16px;
        color: var(--color-gray-1);
        :hover {
          transform: scale(1.2);
          color: var(--color-negative);
        }
      }
    }

    > form {
      padding: 24px 22px 32px 22px;
      border-radius: 0 0 var(--border-radius-1) var(--border-radius-1);
      background-color: var(--color-gray-3);
      display: flex;
      flex-direction: column;
      gap: 20px;

      > div {
        display: flex;
        gap: 20px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    > div {
      padding: 0 12px;

      > form > div > button:first-child {
        min-width: min-content;
        width: 90%;
      }
    }
  }

  @media (orientation: landscape) {
    > div {
      transform: scale(0.7);
    }
  }
`;
