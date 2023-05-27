import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("* campo obrigatório")
    .max(45, "* máximo de 45 caracteres"),

  password: yup
    .string()
    .required("* campo obrigatório")
    .max(120, "* máximo de 120 caracteres"),
});
