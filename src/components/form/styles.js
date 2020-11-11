import styled from "styled-components";
import {ConstStyle} from "../app/const-styles";

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
  font-size: 16px;
  line-height: 20px;
  color: ${ConstStyle.C_BLACK};
  background-color: ${ConstStyle.C_WHITE};
  border-radius: 15px;
`;

const InputsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  margin-right: 10px;
  padding: 10px;
  border: 2px solid ${ConstStyle.C_BLACK};
`;

const LoginWrapper = styled.div`
  display: flex;
  width: 50%;
  padding: 10px;
  border: 2px solid ${ConstStyle.C_BLACK};
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  input {
    width: 180px;
    height: 30px;
  }

  label {
    display: block;
    margin-bottom: 6px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  min-height: 30px;
  margin-top: auto;
  padding: 5px 10px;
  text-align: center;
  background-color: ${ConstStyle.C_LIGHTBLUE};
  border: none;
  border-radius: 5px;
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: ${ConstStyle.C_ALIZARIN_CRIMSON};
`;

export {Wrapper, InputsWrapper, SearchWrapper, LoginWrapper, FormWrapper, InputWrapper, Button, ErrorMessage};
