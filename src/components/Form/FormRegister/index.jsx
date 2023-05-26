import React, { useContext } from "react";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { StyledForm } from "../styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./schemas";
import { ClientContext } from "../../../context/ClientContext";
import { BsEyeSlash, BsFillEyeFill } from "react-icons/bs";

export const FormRegister = () => {
  const { loading, registerSubmit, showPass, setShowPass } =
    useContext(ClientContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(registerSubmit)} noValidate>
      <div>
        <h2 className="font-title-1">Crie agora sua conta</h2>
        <p className="font-headline-gray">É fácil, rápido e gratuito!</p>
      </div>
      <>
        <Input
          label="Nome"
          type="text"
          placeholder="Digite aqui seu nome completo"
          register={register("name")}
          error={errors.name?.message}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Digite aqui seu email"
          register={register("email")}
          error={errors.email?.message}
        />
        <Input
          label="Telefone"
          type="text"
          placeholder="Digite aqui seu telefone"
          register={register("telephone")}
          error={errors.telephone?.message}
        />
        <Input
          label="Senha"
          type={showPass ? "text" : "password"}
          placeholder="Crie aqui sua senha"
          register={register("password")}
          error={errors.password?.message}
          children={
            showPass ? (
              <BsEyeSlash onClick={() => setShowPass(!showPass)} />
            ) : (
              <BsFillEyeFill onClick={() => setShowPass(!showPass)} />
            )
          }
        />
        <Input
          label="Confirmar Senha"
          type={showPass ? "text" : "password"}
          placeholder="Digite a senha novamente"
          register={register("passwordConfirm")}
          error={errors.passwordConfirm?.message}
        />
        <Button
          type="submit"
          size="default"
          color={!loading ? "colored" : "disabled"}
          children={!loading ? "Cadastrar" : <span className="loader"></span>}
        />
      </>
    </StyledForm>
  );
};
