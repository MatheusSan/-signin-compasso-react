import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import StyledButton from "../../styled _components/styled_button";
import StyledInput from "../../styled _components/styled_input";

import {
  Page,
  FormContainer,
  BackgroundContainer,
  FormBox,
  Title,
  SubTitle,
  LoginTitle,
  UserIcon,
  PasswordIcon,
  LogoIcon,
  LogoForm,
  Error,
} from "../login/styles";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(32)
    .required()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Page>
        <LogoForm></LogoForm>
        <FormContainer
          error={errors.email?.message || errors.password?.message}
        >
          <FormBox onSubmit={handleSubmit(onSubmitHandler)}>
            <Title>Olá,</Title>
            <SubTitle>
              Para continuar navegando de forma
              <br /> segura, efetue o login na rede.
            </SubTitle>
            <LoginTitle>Login</LoginTitle>
            <StyledInput
              {...register("email")}
              type="email"
              placeholder="Usuário"
              error={errors.email?.message}
            />
            <UserIcon />
            <StyledInput
              {...register("password")}
              type="password"
              placeholder="Senha"
              error={errors.password?.message}
            />
            <PasswordIcon />
            {(errors.password?.message || errors.email?.message) && (
              <>
                <Error>
                  Ops, {errors.email?.message && "email"}
                  {errors.password?.message && errors.email?.message && " ou "}
                  {errors.password?.message && "senha"}
                  {!errors.email?.message ? " inválida" : " inválido"}
                  {errors.password?.message && errors.email?.message && "s"}
                  <br />
                  Tente novamente!
                </Error>
              </>
            )}
            <StyledButton type="submit">Continuar</StyledButton>
          </FormBox>
        </FormContainer>
        <BackgroundContainer>
          <LogoIcon></LogoIcon>
        </BackgroundContainer>
      </Page>
    </>
  );
}

export default Login;
