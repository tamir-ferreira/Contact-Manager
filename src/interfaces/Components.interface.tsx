import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FlattenSimpleInterpolation, css } from "styled-components";

export interface ChildrenProps {
  children: ReactNode;
}

export interface HeaderProps {
  className: string;
}

export interface AnimProp {
  children: ReactNode;
  delay: number;
}

export interface Button {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: ReactNode;
  model: string;
  color: string;
  className?: string;
}

export interface ButtonVariants {
  [key: string]: FlattenSimpleInterpolation;
}

export interface Input {
  label: string;
  children?: ReactNode;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  error?: string | undefined;
  value?: string;
  disabled?: boolean;
}

export interface RotateVariants {
  width?: "toLandscape";
}

export interface Modal {
  name: string;
  email: string;
  telephone: string;
}
