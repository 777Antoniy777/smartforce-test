import styled from "styled-components";
import {ConstStyle} from "../app/const-styles";
import {ListStyle} from "../app/based-styles";

const List = styled.ul`
  ${ListStyle}
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  color: ${props => props.ispressed ? `${ConstStyle.C_WHITE}` : `${ConstStyle.C_BLACK}`};
  background-color: ${props => props.ispressed ? `${ConstStyle.C_BLACK}` : `${ConstStyle.C_WHITE}`};
  border: 1px solid ${ConstStyle.C_BLACK};
  border-radius: 50%;
  transition: color 0.3s, background-color 0.3s;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: ${ConstStyle.C_WHITE};
    background-color: ${ConstStyle.C_BLACK};
  }
`;

export {List, Item, Button};
