import styled from "styled-components";
import {ConstStyle} from "../app/const-styles";
import {ListStyle} from "../app/based-styles";

const List = styled.ol`
  ${ListStyle}
  counter-reset: list;
`;

const Item = styled.li`
  position: relative;
  padding: 5px;
  padding-left: 20px;
  text-align: center;
  border-bottom: 1px solid ${ConstStyle.C_LIGHTGRAY};

  &::before {
    content: counter(list) ".";
    counter-increment: list;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
`;

export {List, Item};
