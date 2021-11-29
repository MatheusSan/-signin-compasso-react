import styled from "styled-components";
import LogoHome from "../../assets/logged/LogoCompasso.png";
import LogoBackground from "../../assets/logged/logoBall.png";
import BackgroundMobile from "../../assets/logged/CompassoMobile.png";

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(105.96deg, #ffffff 0%, #f0f0f0 97.86%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
`;
export const Main = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
`;

export const TextoContainer = styled.div`
  width: 70%;
  float: right;
  height: 80%;
  display: flex;
  flex-direction: column;
  padding-right: 5%;
  justify-content: center;
  margin: auto;
  padding-bottom: 50px;
  @media (max-width: 1440px) {
    padding-right: 2%;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const TextoRed1 = styled.p`
  font-size: 64px;
  line-height: 18px;
  font-weight: bold;
  line-height: 82px;
  color: rgba(193, 45, 24, 1);
  min-width: 750px;
  text-align: right;
  @media (max-width: 1440px) {
    font-size: 50px;
  }
`;

export const TextoRed2 = styled.p`
  font-weight: bold;
  font-size: 36px;
  line-height: 46px;
  color: #c12d18;
  text-align: right;
  @media (max-width: 1440px) {
    font-size: 30px;
  }
`;

export const SubTexto = styled.p`
  font-size: 24px;
  line-height: 30px;
  text-align: right;
  @media (max-width: 1440px) {
    font-size: 20px;
  }
`;

export const Hora = styled.p`
  font-weight: bold;
  font-size: 100.8px;
  line-height: 128.1px;
  margin-top: 15px;
  margin-bottom: -25px;
`;

export const Header = styled.div`
  height: 140px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    height: 75px;
  }
`;

export const SubTextHora = styled.p`
  font-size: 12px;
  line-height: 18px;
`;

export const HoraContainer = styled.div`
  justify-content: center;
  margin-left: 25px;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LogoPage = styled.div`
  width: 150px;
  height: 42.75px;
  margin-left: 40px;
  margin-top: 25px;
  background-image: url(${LogoHome});
  @media (max-width: 1024px) {
    margin-left: 20px;
    margin-top: 15px;
  }
`;

export const LogoBG = styled.div`
  width: 30%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: bottom;
  background-image: url(${LogoBackground});
  @media (max-width: 1440px) {
    width: 50%;
  }
  @media (max-width: 1024px) {
    width: 90%;
    background-image: url(${BackgroundMobile});
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  display: flex;
  bottom: 0;
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
`;

export const FooterContainer1 = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const FooterContainer2 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Divisor = styled.div`
  width: 1px;
  position: relative;
  height: 61px;
  margin-top: 19px;
  background-color: #ffffff;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const FooterTexto = styled.p`
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  color: #ffffff;
  padding-left: 30%;
  padding-right: 10%;
  padding-top: 33px;
  padding-bottom: 8px;
`;

export const FooterSubContainer1 = styled.div`
  width: 70%;
`;

export const FooterSubContainer2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterCounterContainer = styled.div`
  width: 70%;
  display: flex;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const FooterButtonBox1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  min-width: 131px;
  @media (max-width: 1440px) {
    min-width: 110px;
  }
  @media (max-width: 1024px) {
    max-width: none;
    width: 80%;
  }
`;

export const FooterButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: row-reverse;
  }
`;

export const FooterButtonBox2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 131px;
  cursor: pointer;
  @media (max-width: 1440px) {
    min-width: 110px;
  }
  @media (max-width: 1024px) {
    width: 20%;
    max-width: none;
    min-width: 131px;
  }
`;

export const CounterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1440px) {
  }
`;

export const FooterTexto2 = styled.p`
  font-size: 14px;
  line-height: 15px;
  text-align: right;
  color: #ffffff;
  padding-left: 30%;
  padding-right: 10%;
  padding-top: 33px;
  padding-bottom: 8px;
`;

export const FooterTexto3 = styled.p`
  font-size: 14px;
  line-height: 15px;
  text-align: right;
  color: #ffffff;
`;

export const Counter = styled.p`
  font-size: 48px;
  font-weight: bold;
  color: #ffffff;
  padding-top: 13px;
  margin-bottom: -10px;
`;

export const ContinuarRed = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: #c13216;
`;

export const Logout = styled.p`
  font-size: 12px;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
`;

export const SubCounterContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1440px) {
    width: 100%;
    justify-content: center;
  }
`;

export const SubBoxTexto2 = styled.div`
  height: 100%;
  width: 170px;
`;

export const IconTemp = styled.img`
  width: 41px;
  height: 45px;
`;

export const Degree = styled.div`
  font-weight: bold;
  font-size: 48px;
  line-height: 61px;
  margin-left: 15.22px;
`;

export const Textotemp = styled.div`
  font-size: 14px;
  line-height: 18px;
  display: flex;
  flex-direction: column;
`;

export const Temp = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TempBox = styled.div`
  margin: 25px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1440px) {
    margin-top: 50px;
    margin: 60px 20px;
  }
`;
