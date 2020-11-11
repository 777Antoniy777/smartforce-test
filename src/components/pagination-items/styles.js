import styled from "styled-components";
import {ConstStyle} from "../app/const-styles";
import {ListStyle} from "../app/based-styles";

const List = styled.ul`
  ${ListStyle}
  display: flex;
  justify-content: center;
`;

const Item = styled.li`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${ConstStyle.C_WHITE};
  border: 1px solid ${ConstStyle.C_BLACK};
  border-radius: 50%;
  cursor: pointer;
`;

export {List, Item, Button};
