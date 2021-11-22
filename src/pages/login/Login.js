import React from "react";
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
} from "../login/styles";

function Login() {
  return (
    <>
      <Page>
        <LogoForm></LogoForm>
        <FormContainer>
          <FormBox>
            <Title>Olá,</Title>
            <SubTitle>
              Para continuar navegando de forma
              <br /> segura, efetue o login na rede.
            </SubTitle>
            <LoginTitle>Login</LoginTitle>
            <StyledInput type="email" placeholder="Usuário" />
            <UserIcon />
            <StyledInput type="password" placeholder="Senha" />
            <PasswordIcon />
            <StyledButton>Continuar</StyledButton>
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
