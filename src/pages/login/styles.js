import styled from "styled-components";
import bg from "../../images/bg2.webp";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  /* max-width: 370px; */
  margin: 0 auto;
  /* border: 2px solid var(--color-secondary); */
  /*  background-image: url(${bg});
  background-size: contain;
  background-repeat: round; */
  /* background-position: center; */

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 48px 0 35px 0;
  }

  main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    opacity: 0.96;

    /* section:first-child { */
    /* width: 370px; */
    /* height: 100%; */
    /* background-color: var(--color-secondary); */
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
    /* } */
    section:last-child {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        width: 100%;
        max-width: 370px;
        display: flex;
        flex-direction: column;
        padding: 25px;
        align-items: center;
        background-color: var(--color-gray-3);
        color: var(--color-gray-0);
        border-radius: var(--border-radius-1);

        > p {
          margin: 34px 0 22px 0;
          text-align: center;
          line-height: 18px;
        }

        a,
        button {
          width: 100%;
        }

        @media only screen and (max-width: 600px) {
          margin: 12px;
        }
      }
    }
  }
`;
