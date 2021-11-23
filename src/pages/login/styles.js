import styled from "styled-components";
import bgImage from "../../assets/login/background.png";
import User from "../../assets/login/icon_user.svg";
import Password from "../../assets/login/icon_password.svg";
import Logo from "../../assets/login/logo.png";

export const Page = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
  @media (max-width: 1024px) {
    height: auto;
    min-height: 100vh;
  }
`;

export const FormContainer = styled.div`
  width: 50%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  height: 100vh;
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
    background: #1c1d20;
  }
`;

export const FormBox = styled.form`
  display: flex;
  justify-content: center;
  text-align: center;
  height: auto;
  width: auto;
  flex-flow: column;
  margin-top: 10%;
`;

export const BackgroundContainer = styled.div`
  width: 50%;
  float: right;
  height: 100vh;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Title = styled.p`
  color: #e0e0e0;
  font-size: 60px;
  text-align: left;
  margin-bottom: 17px;
`;

export const SubTitle = styled.p`
  color: #e0e0e0;
  font-size: 16px;
  text-align: left;
  margin-bottom: 135px;
  @media (max-width: 1024px) {
    margin-bottom: 93px;
  }
  @media (max-height: 850px) {
    margin-bottom: 40px;
  }
`;

export const LoginTitle = styled.p`
  color: #e0e0e0;
  font-size: 30px;
  text-align: left;
  margin-bottom: 32px;
  @media (max-height: 750px) {
    margin-bottom: 20px;
  }
`;

export const UserIcon = styled.p`
  background-image: url(${User});
  width: 20px;
  height: 20px;
  margin-left: 89%;
  position: relative;
  top: -80px;

  @media (max-width: 1024px) {
    margin-bottom: 20px;
    top: -44px;
  }
`;

export const PasswordIcon = styled.p`
  background-image: url(${Password});
  width: 20px;
  background-repeat: no-repeat;
  height: 25px;
  margin-left: 89%;
  position: relative;
  top: -80px;
  @media (max-width: 1024px) {
    margin-bottom: 20px;
    top: -44px;
  }
`;

export const LogoIcon = styled.p`
  background-image: url(${Logo});
  width: 306px;
  height: 69px;
  margin-top: 35px;
`;

export const LogoForm = styled.p`
  background-image: url(${Logo});
  display: none;
  width: 306px;
  height: 69px;
  background-position: bottom left;
  background-repeat: no-repeat;
  top: 11px;
  right: 20px;
  float: right;
  position: absolute;
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const Error = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #E9B425;
  padding-bottom: 20px;
  line-height: 22px;
`;
