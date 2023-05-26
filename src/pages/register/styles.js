import styled from "styled-components";

export const StyledRegister = styled.div`
  width: 100%;
  max-width: 370px;
  margin: 0 auto;

  main {
    opacity: 0.97;
    display: flex;
    flex-direction: column;
    padding: 70px 20px 30px 20px;
    margin-top: 80px;
    border-radius: var(--border-radius-1);
    background-color: var(--color-gray-3);
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

    main {
      overflow-x: hidden;
    }
  }
`;
