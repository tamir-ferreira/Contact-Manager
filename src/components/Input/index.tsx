import { Input as iInput } from "../../interfaces";
import { StyledInput } from "./styles";

export const Input = ({
  label,
  type,
  value,
  disabled,
  placeholder,
  children,
  register,
  error,
}: iInput) => {
  return (
    <StyledInput>
      <label className="font-headline" htmlFor={register.name}>
        {label}
      </label>
      {children}
      <input
        id={register.name}
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        className={error && "error"}
        {...register}
      />
      {error && (
        <p className="font-headline" aria-label="erro na validação do campo">
          {error}
        </p>
      )}
    </StyledInput>
  );
};
