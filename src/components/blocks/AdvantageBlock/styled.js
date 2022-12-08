import styled from "styled-components";
import { CommonText, CommonTitle } from "../../common/styled";

export const AdvantagesContainer = styled.div`
  background: top right no-repeat url('media/advantagesBackground0.svg'), bottom left no-repeat url('media/advantagesBackground1.svg');
  padding: 0 0 100px;
`;

export const Title = styled(CommonTitle)`
  width: fit-content;
  margin: auto;
`;

export const Text = styled(CommonText)`
  text-align: center;
  width: 70%;
  margin: 45px auto 90px;
`;

export const Advantages = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  margin: auto;
`;

export const Advantage = styled.div`
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 22px;
  box-shadow: 10px 10px 0px ${(props) => props.color};
`;