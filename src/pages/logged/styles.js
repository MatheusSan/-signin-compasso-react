import styled from 'styled-components';

export default styled.div`
  background-color: #E0E0E0;

  .header {
    padding-right: 41px;
    padding-left: 41px;
    color: #222222;
    .logo-header {
      img {
        width: 150px;
        max-height: 42.75px;
      }
    }
    .header-mid {
      text-align: center;
      .timer {
        font-weight: bold;
        font-size: 100.8px;
        line-height: 128.1px;
      }
    }
    .header-end {
      text-align: end;
    }
    .degree {
      font-weight: bold;
      font-size: 48px;
      line-height: 61px;
      margin-left: 15.22px;
    }
  }

  .body {
    .body-left {
      position: relative;
      height: 749px;
      overflow: hidden;
    }
    .body-left img {
      margin-left: -15px;
      bottom: 0;
    }
    
    .body-right {
      text-align: end;
      padding-right: 134px;
      margin-top: 2%;
      margin-bottom: 5%;
      .content-text-first {
        font-weight: bold;
        font-size: 36px;
        line-height: 46px;
        color: #C12D18;
      }
      .content-text {
        font-weight: bold;
        font-size: 64px;
        line-height: 81px;
        color: #C12D18;
      }
      .sub-text {
        font-size: 24px;
        line-height: 30px;
      }
    }
  }

  .footer {
    min-height: 100px;
    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
    color: #FFFFFF;
    .footer-first {
      border-right: 1px solid #FFFFFF;
      height: 61px;
      text-align: right;
    }
    .footer-mid {
      .refresh {
        text-align: right;
      }
      .countDown {
        font-weight: bold;
        font-size: 48px;
        line-height: 61px;
        text-align: center;
      }
    }
    .footer-end {
      text-align:right;
      .refresh, .logout {
        max-width: 131px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .header {
      padding-top: 20px;
      .header-end {
        .city {
          font-size: 12px;
        }
        .degree {
          font-size: 37px;
          line-height: 41px;
          margin-left: none;
        }
      }
    }
    
    .body {
      .body-left {
        background: none;
        height: auto;
      }
      .body-right {
        margin-bottom: 50px;
        padding-right: 10%;
        .content-text-first {
          font-size: 25.5px;
          line-height: 32.2px;
        }
        .content-text {
          font-size: 44.8px;
          line-height: 56.7px;
        }
        .sub-text {
          font-size: 16.8px;
          line-height: 21px;
        }
      }
    }

    .footer {
      .footer-first {
        margin-top: 15px;
        border-right: 0px;
        text-align: center;
      }
      .footer-end {
        margin-top: 15px;
        text-align:center;
        .refresh, .logout {
          max-width: 100%;
        }
      }
      .button-refresh, .button-logout{ 
        margin-bottom: 30px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 18px;
      }
      .button-refresh {
        border: 1px solid #1C1D20;
      }
      .button-logout {
        border: 1px solid #FFFFFF;
      }
    }
}
`;