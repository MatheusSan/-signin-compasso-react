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
`;

export const FormContainer = styled.div`
  width: 50%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
`;

export const FormBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: auto;
  width: auto;
  flex-flow: column;
  margin-top: 450px;
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
`;

export const LoginTitle = styled.p`
  color: #e0e0e0;
  font-size: 30px;
  text-align: left;
  margin-bottom: 32px;
`;

export const UserIcon = styled.p`
  background-image: url(${User});
  width: 20px;
  height: 20px;
  margin-left: 89%;
  position: relative;
  top: -80px;
`;

export const PasswordIcon = styled.p`
  background-image: url(${Password});
  width: 20px;
  background-repeat: no-repeat;
  height: 25px;
  margin-left: 89%;
  position: relative;
  top: -80px;
`;

export const LogoIcon = styled.p`
  background-image: url(${Logo});
  width: 306px;
  height: 69px;
  margin-top: 35px;
`;
