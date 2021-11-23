import styled from "styled-components";

const StyledInput = styled.input`
  width: 339px;
  height: 67px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0);
  border: ${(props) => (props.error ? "solid 1px #E9B425" : "solid 1px #FFF")};
  color: #ffffff;
  padding: 0px 20px 0px 20px;
  font-size: 16px;
  margin-bottom: 33px;
  ::placeholder {
    color: #ffffff;
  }
  @media (max-width: 1024px) {
    margin-bottom: -5px;
    width: 90%;
    max-width: 379px;
  }
`;
export default StyledInput;
