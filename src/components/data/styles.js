import styled from "styled-components";
import {ConstStyle} from "../app/const-styles";

const Wrapper = styled.section`
  width: 100%;
  padding-top: 10px;
  font-size: 18px;
  line-height: 22px;
  color: ${ConstStyle.C_BLACK};
  background-color: ${ConstStyle.C_WHITE};
  border-radius: 15px;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0 10px 20px;
  font-size: 22px;
  line-height: 24px;
`;

export {Wrapper, Title};
