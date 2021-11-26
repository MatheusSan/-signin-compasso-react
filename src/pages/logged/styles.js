import styled from "styled-components";
import LogoHome from "../../assets/logged/LogoCompasso.png";
import LogoBackground from "../../assets/logged/logoBall.png";

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
  text-align: right;
`;

export const TextoRed2 = styled.p`
  font-weight: bold;
  font-size: 36px;
  line-height: 46px;
  color: #c12d18;
  text-align: right;
`;

export const SubTexto = styled.p`
  font-size: 24px;
  line-height: 30px;
  text-align: right;
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
`;

export const SubTextHora = styled.p`
  font-size: 12px;
  line-height: 18px;
`;

export const HoraContainer = styled.div`
  justify-content: center;
  margin-left: -178px;
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
`;

export const LogoBG = styled.div`
  width: 30%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: bottom;
  background-image: url(${LogoBackground});
  @media (max-width: 1024px) {
    width: 90%;
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
`;

export const FooterButtonBox1 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  max-width: 131px;
`;

export const FooterButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;
`;

export const FooterButtonBox2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  max-width: 131px;
  cursor: pointer;
`;

export const CounterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;
// export default styled.div`
//   background-color: #e0e0e0;

//   .header {
//     padding-right: 41px;
//     padding-left: 41px;
//     color: #222222;
//     .logo-header {
//       img {
//         width: 150px;
//         max-height: 42.75px;
//       }
//     }
//     .header-mid {
//       text-align: center;
//       .timer {
//         font-weight: bold;
//         font-size: 100.8px;
//         line-height: 128.1px;
//       }
//     }
//     .header-end {
//       text-align: end;
//     }
//     .degree {
//       font-weight: bold;
//       font-size: 48px;
//       line-height: 61px;
//       margin-left: 15.22px;
//     }
//   }

//   .body {
//     .body-left {
//       position: relative;
//       height: 749px;
//       overflow: hidden;
//     }
//     .body-left img {
//       margin-left: -15px;
//       bottom: 0;
//     }

//     .body-right {
//       text-align: end;
//       padding-right: 134px;
//       margin-top: 2%;
//       margin-bottom: 5%;
//       .content-text-first {
//         font-weight: bold;
//         font-size: 36px;
//         line-height: 46px;
//         color: #c12d18;
//       }
//       .content-text {
//         font-weight: bold;
//         font-size: 64px;
//         line-height: 81px;
//         color: #c12d18;
//       }
//       .sub-text {
//         font-size: 24px;
//         line-height: 30px;
//       }
//     }
//   }

//   .footer {
//     min-height: 100px;
//     background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
//     color: #ffffff;
//     .footer-first {
//       border-right: 1px solid #ffffff;
//       height: 61px;
//       text-align: right;
//     }
//     .footer-mid {
//       .refresh {
//         text-align: right;
//       }
//       .countDown {
//         font-weight: bold;
//         font-size: 48px;
//         line-height: 61px;
//         text-align: center;
//       }
//     }
//     .footer-end {
//       text-align: right;
//       .refresh,
//       .logout {
//         max-width: 131px;
//       }
//     }
//   }

//   @media only screen and (max-width: 768px) {
//     .header {
//       padding-top: 20px;
//       .header-end {
//         .city {
//           font-size: 12px;
//         }
//         .degree {
//           font-size: 37px;
//           line-height: 41px;
//           margin-left: none;
//         }
//       }
//     }

//     .body {
//       .body-left {
//         background: none;
//         height: auto;
//       }
//       .body-right {
//         margin-bottom: 50px;
//         padding-right: 10%;
//         .content-text-first {
//           font-size: 25.5px;
//           line-height: 32.2px;
//         }
//         .content-text {
//           font-size: 44.8px;
//           line-height: 56.7px;
//         }
//         .sub-text {
//           font-size: 16.8px;
//           line-height: 21px;
//         }
//       }
//     }

//     .footer {
//       .footer-first {
//         margin-top: 15px;
//         border-right: 0px;
//         text-align: center;
//       }
//       .footer-end {
//         margin-top: 15px;
//         text-align: center;
//         .refresh,
//         .logout {
//           max-width: 100%;
//         }
//       }
//       .button-refresh,
//       .button-logout {
//         margin-bottom: 30px;
//         border-radius: 5px;
//         font-weight: bold;
//         font-size: 18px;
//       }
//       .button-refresh {
//         border: 1px solid #1c1d20;
//       }
//       .button-logout {
//         border: 1px solid #ffffff;
//       }
//     }
//   }
// `;

// export const H3 = styled.h3`
//   font-size: 18;
//   line-height: 23px;
// `;

// export const H4 = styled.p`
//   font-size: 14px;
//   line-height: 18px;
// `;

// export const H6 = styled.p`
//   font-size: 12px;
//   line-height: 15px;
// `;

// export const Text = styled.p`
//   font-size: 16px;
//   line-height: 20px;
// // `;

// .button-logout {
//   background: transparent;
//   width: 100%;
//   min-height: 100px;
//   color: #ffffff;
//   display: inline-block;
//   text-align: center;
//   text-decoration: none;
//   font-size: 12px;
//   line-height: 15px;
// }
// .button-refresh {
//   background: #ffffff;
//   width: 100%;
//   min-height: 100px;
//   color: #C13216;
//   display: inline-block;
//   text-align: center;
//   text-decoration: none;
//   font-size: 12px;
//   line-height: 15px;
// }
