import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "* mínimo de 3 caracteres")
    .max(45, "* máximo de 45 caracteres")
    .required("* campo obrigatório"),

  email: yup
    .string()
    .max(45, "* máximo de 45 caracteres")
    .email("* endereço de e-mail inválido")
    .required("* campo obrigatório"),

  telephone: yup
    .string()
    .max(15, "* máximo de 15 caracteres")
    .required("* campo obrigatório"),

  password: yup
    .string()
    .required("* campo obrigatório")
    .min(4, "* mínimo de 4 caracteres")
    .max(120, "* máximo de 120 caracteres")
    .matches(/(?=.*?[A-Z])/, "* necessário pelo menos 1 letra minúscula")
    .matches(/(?=.*?[0-9])/, "* necessário pelo menos 1 número")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "* necessário pelo menos 1 caracter especial"
    ),

  passwordConfirm: yup
    .string()
    .required("* campo obrigatório")
    .min(4, "* mínimo de 4 caracteres")
    .max(120, "* máximo de 120 caracteres")
    .matches(/(?=.*?[A-Z])/, "* necessário pelo menos 1 letra minúscula")
    .matches(/(?=.*?[0-9])/, "* necessário pelo menos 1 número")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "* necessário pelo menos 1 caracter especial"
    )
    .oneOf(
      [yup.ref("password"), null],
      "* necessário que as senhas sejam iguais"
    ),
});
