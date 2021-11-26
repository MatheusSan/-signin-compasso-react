import React, { useContext, useState, useEffect } from "react";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/AuthUser";
import {
  Page,
  TextoRed1,
  TextoRed2,
  SubTexto,
  Hora,
  SubTextHora,
  LogoBG,
  Footer,
  TextoContainer,
  LogoPage,
  Header,
  HoraContainer,
  Main,
  FooterContainer1,
  FooterContainer2,
  FooterTexto,
  FooterTexto2,
  Divisor,
  FooterSubContainer1,
  FooterSubContainer2,
  FooterButtonBox1,
  FooterButtonBox2,
  FooterButtonContainer,
  Counter,
  CounterBox,
  ContinuarRed,
  Logout,
  FooterCounterContainer,
  FooterTexto3,
  SubCounterContainer,
  SubBoxTexto2,
  IconTemp,
  Textotemp,
  Degree,
  Temp,
  TempBox,
} from "../logged/styles";

import iconCloud from "../../assets/logged/icon_cloud.svg";

export default function Logged() {
  let navigate = useNavigate();
  const [countDown, setcountDown] = useState(60);
  const [time, setTime] = useState("- : -");
  const [date, setDate] = useState();
  const { removeLocalStorage } = useContext(Context);

  function logout() {
    removeLocalStorage();
    navigate("/");
  }

  function getDataTimes() {
    const now = new Date();
    const formattedTime = format(now, "HH':'mm", { locale: pt });
    setTime(formattedTime);
    const formattedDate = format(now, "EEEE',' dd 'de' MMMM 'de' y", {
      locale: pt,
    });
    setDate(formattedDate);
  }

  React.useEffect(() => {
    if (countDown <= 0) {
      logout();
    }
    const timer =
      countDown > 0 &&
      setInterval(() => {
        setcountDown(countDown - 1);
        getDataTimes();
      }, 1000);
    return () => clearInterval(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countDown]);

  const [weather, setWeather] = useState({
    hasTime: false,
  });

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
        "Porto Alegre"
      )}&appid=b12cc455611ace8c995bf56a99e68964&units=metric&lang=pt_br`
    )
      .then((response) => response.json())
      .then((results) => {
        if (results.cod === 200) {
          setWeather({
            hasTime: true,
            temp: results.main.temp.toFixed(0),
            tempIcon: results?.weather[0]?.icon,
          });
        }
      });
  }, [weather]);

  return (
    <Page>
      <Header>
        <LogoPage />
        <HoraContainer>
          <Hora>{time}</Hora>
          <SubTextHora>{date}</SubTextHora>
        </HoraContainer>
        <TempBox>
          <Textotemp>Porto Alegre - RS</Textotemp>
          <Temp>
            <IconTemp
              src={
                weather.hasTime
                  ? `http://openweathermap.org/img/wn/${weather.tempIcon}@2x.png`
                  : iconCloud
              }
              alt="icon-temp"
            />
            <Degree>{weather.temp}º</Degree>
          </Temp>
        </TempBox>
      </Header>
      <Main>
        <LogoBG />

        <TextoContainer>
          <TextoRed2>Our mission is</TextoRed2>
          <SubTexto>nossa missão é</SubTexto>
          <TextoRed1>transform the world</TextoRed1>
          <SubTexto>transformar o mundo</SubTexto>
          <TextoRed1>building digital experiences</TextoRed1>
          <SubTexto>construindo experiências digitais</SubTexto>
          <TextoRed1>that enable our client's growth</TextoRed1>
          <SubTexto>que permitam o crescimento dos nossos clientes</SubTexto>
        </TextoContainer>
      </Main>

      <Footer>
        <FooterContainer1>
          <FooterTexto>
            Essa janela do navegador é usada para manter sua sessão de
            autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova
            janela para continuar a navegar.
          </FooterTexto>
        </FooterContainer1>

        <Divisor></Divisor>

        <FooterContainer2>
          <FooterCounterContainer>
            <SubCounterContainer>
              <FooterSubContainer1>
                <SubBoxTexto2>
                  <FooterTexto2>
                    Application <br />
                    refresh in
                  </FooterTexto2>
                </SubBoxTexto2>
              </FooterSubContainer1>
              <FooterSubContainer2>
                <CounterBox>
                  <Counter>{countDown}</Counter>
                  <FooterTexto3>seconds</FooterTexto3>
                </CounterBox>
              </FooterSubContainer2>
            </SubCounterContainer>

            <SubCounterContainer></SubCounterContainer>
          </FooterCounterContainer>

          <FooterButtonContainer>
            <FooterButtonBox1>
              <ContinuarRed>
                Continuar <br />
                Navegando
              </ContinuarRed>
            </FooterButtonBox1>
            <FooterButtonBox2>
              <Logout onClick={() => logout()}>Logout</Logout>
            </FooterButtonBox2>
          </FooterButtonContainer>
        </FooterContainer2>
      </Footer>
    </Page>
  );
}
