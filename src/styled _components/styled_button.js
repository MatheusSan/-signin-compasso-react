import styled from "styled-components";

const StyledButton = styled.button`
  width: 379px;
  height: 67px;
  border-radius: 50px;
  opacity: transparent;
  border: 2px solid #ff2d04;
  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  margin-top: 82px;
  cursor: pointer;
  @media (max-width: 1024px) {
    margin-top: 20px;
    width: 105%;
    max-width: 379px;
  }
  @media (max-height: 750px) {
    margin-top: 0px;
  }
`;

export default StyledButton;
