import styled from "styled-components";
import {ConstStyle} from "../app/const-styles";

const Wrapper = styled.section`
  width: 100%;
  padding: 20px;
  font-size: 16px;
  line-height: 20px;
  color: ${ConstStyle.C_BLACK};
  background-color: ${ConstStyle.C_WHITE};
  border-radius: 15px;
`;

const SearchWrapper = styled.div`
  padding: 8px;
  border: 2px solid ${ConstStyle.C_BLACK};
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    margin-right: 10px;
  }
`;

export {Wrapper, SearchWrapper, InputWrapper};
