import { StyledButton } from "./styles";

export const Button = ({ size, type, color, children, onClick, className }) => {
  return (
    <StyledButton
      onClick={onClick}
      size={size}
      type={type}
      color={color}
      className={className}
    >
      {children}
    </StyledButton>
  );
};
