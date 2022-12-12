import styled from "styled-components";
import { OrderButton } from "../blocks/OrderBlock/styled";
import { CommonText, CommonTitle } from "../common/styled";

export const FormContainer = styled.div`
  width:100%;
  min-height:100%;
  background-color: rgba(0,0,0,0.5);
  overflow:hidden;
  position:fixed;
  top:0px;
  z-index: 200;
`;

export const FormContent = styled.div`
  z-index: 200;
  margin: calc(50vh - 400px) auto;
  width: 800px;
  height: 800px;
  padding: 10px;
  background-color: white;
  padding: 50px;
  border-radius: 50px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px #000;
`;

export const FormTitle = styled(CommonTitle)`
  width: fit-content;
  margin: 0 auto 50px;
  text-align: center;
`;

export const InputContainer = styled.div``;

export const Label = styled(CommonText)``;

export const InputBlock = styled.div``;

export const Input = styled.input`
  height: 50px;
  width: ${(props) => props.width};
  border-radius: 20px;
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 20px;
`;

export const CrossButton = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  margin: auto 0 auto auto;
  display: block;
  cursor: pointer;
`;

export const Button = styled(OrderButton)`
  margin: 100px 200px;
`;

