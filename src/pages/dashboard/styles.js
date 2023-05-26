import styled from "styled-components";

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  header {
    background-color: var(--color-gray-3);
    top: 0;
    position: fixed;
    display: flex;
    align-items: center;
    height: 72px;
    width: 100%;

    span {
      color: var(--color-primary);
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > div {
        display: flex;
        align-items: center;
        padding: 5px 0;
        gap: 30px;

        div {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
      }
    }
  }

  main {
    margin-top: 150px;
    padding: 30px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--color-opacity);

    section:nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 21px;
      text-align: center;

      div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 5px;
        border-radius: var(--border-radius-1);
        background-color: var(--color-gray-3);
        padding: 10px;
        > li {
          padding: 10px 0 10px 25px;
          display: flex;
          min-width: 500px;
          justify-content: space-between;
          align-items: center;
          border-radius: var(--border-radius-1);
          background-color: var(--color-gray-4);
          h4 {
            color: var(--color-gray-1);
          }
          :hover {
            background-color: var(--color-gray-5);
            h4 {
              color: var(--color-gray-0);
            }
          }
          > div {
            display: flex;
            align-items: center;
            width: 65%;
            min-width: 350px;
            justify-content: space-around;
            h5,
            span {
              width: 33.33%;
            }
          }
        }
        overflow-x: auto;
      }

      > div:last-child {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        > img {
          padding: 30px 0;
          max-width: 200px;
          animation: float 3s ease-in-out infinite;
        }
      }
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: scale(0.95);
    }
    50% {
      transform: scale(1);
    }
  }

  @media only screen and (max-width: 600px) {
    header {
      padding: 0 12px;
      nav > div {
        width: 100%;
        gap: 10px;
        justify-content: flex-end;
      }
    }

    section {
      padding: 0 12px;
    }

    section:nth-child(2) > div {
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      align-items: flex-start;
    }

    section:nth-child(3) > ul {
      padding: 23px 8.5px;
    }
  }

  @media (orientation: landscape) {
    header {
      padding: 0 20px;
    }
    main {
      padding: 30px;
      margin-top: 80px;
      max-height: 75vh;
      position: relative;
      overflow: hidden;

      section {
        margin-top: 30px;
        overflow-y: scroll;
        > div {
          padding: 0 30px;
          width: 100%;
          position: absolute;
          left: 0;
          top: 5px;
        }
        :nth-child(1) > ul {
          width: 100%;
          margin-top: 110px;
          overflow-x: unset;
        }
      }
    }
  }
`;
