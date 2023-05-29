import * as yup from "yup";

export const modalSchemaCreate = yup.object().shape({
  name: yup
    .string()
    .required("* campo obrigatório")
    .max(45, "* máximo de 45 caracteres"),
  email: yup
    .string()
    .email("* endereço de e-mail inválido")
    .required("* campo obrigatório")
    .max(45, "* máximo de 45 caracteres"),
  telephone: yup
    .string()
    .required("* campo obrigatório")
    .max(15, "* máximo de 15 caracteres"),
});

export const modalSchemaUpdate = yup.object().shape({
  name: yup.string().optional().max(45, "* máximo de 45 caracteres"),
  email: yup.string().email().optional().max(45, "* máximo de 45 caracteres"),
  telephone: yup.string().optional().max(15, "* máximo de 15 caracteres"),
});
