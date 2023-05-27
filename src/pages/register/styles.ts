import styled from "styled-components";

export const StyledRegister = styled.div`
  width: 100%;
  max-width: 370px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    width: 100%;
    opacity: 0.96;
    display: flex;
    flex-direction: column;
    padding: 70px 20px 30px 20px;
    border-radius: var(--border-radius-1);
    background: var(--color-opacity);
    color: var(--color-gray-0);
    position: relative;

    > a {
      position: absolute;
      right: 20px;
      top: 20px;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 48px 0;
    width: 100%;
    span {
      color: var(--color-primary);
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 0 12px;
    margin-bottom: 30px;
    height: 100vh;

    main {
      padding-top: 25px;
      overflow-x: hidden;

      form {
        > div:first-child {
          width: 70%;
          align-items: flex-start;
          margin-bottom: 15px;
        }
      }
    }
  }
`;
