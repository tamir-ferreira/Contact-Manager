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
    height: 70px;
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
    height: 70vh;

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
            background-color: var(--color-primary-disable);
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
        margin-top: 40px;
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

  @media only screen and (max-width: 700px) and (orientation: landscape) {
    header {
      padding: 0 20px;
      height: 60px;
      nav > div {
        width: 100%;
        gap: 20px;
        justify-content: flex-end;
      }
      h1 {
        font-size: 1.2em;
      }
    }

    main {
      padding: 10px;
      width: 95vw;
      margin-top: 70px;
      height: 80vh;
      position: relative;
      overflow: hidden;
      > section {
        margin-top: 40px;
        overflow-y: auto;
        padding: 0 12px;
        /* padding-top: 25px; */

        > div {
          padding: 0px 20px;
          width: 100%;
          position: absolute;
          left: 0;
          top: 10px;
        }
        :nth-child(1) {
          justify-content: flex-start;
          > div:last-child > img {
            padding: 0;
            margin: 0;
          }
          > ul {
            width: 100%;
            overflow-x: unset;
          }
        }

        :nth-child(2) > div {
          flex-direction: column;
          justify-content: center;
          gap: 10px;
          align-items: flex-start;
        }
        :nth-child(3) > ul {
          padding: 23px 8.5px;
        }
      }
    }
  }
`;
