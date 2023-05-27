import rotate from "../../images/rotate.gif";
import { StyledRotate } from "./styles";

export const Rotate = ({ width }) => {
  return (
    <StyledRotate width={width}>
      <img src={rotate} alt="gire a tela" />
    </StyledRotate>
  );
};
