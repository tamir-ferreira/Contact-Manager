import { Button as iButton } from "../../interfaces";
import { StyledButton } from "./styles";

export const Button = ({
  color,
  className,
  children,
  model,
  onClick,
}: iButton) => {
  return (
    <StyledButton
      onClick={onClick}
      model={model}
      color={color}
      className={className}
    >
      {children}
    </StyledButton>
  );
};
