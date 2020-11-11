import styled from "styled-components";
import {ConstStyle} from "../app/const-styles";

const Wrapper = styled.section`
  width: 100%;
  font-size: 18px;
  line-height: 22px;
  color: ${ConstStyle.C_BLACK};
`;

const DataItemsWrapper = styled.div`
  margin-bottom: 20px;
  padding-top: 10px;
  background-color: ${ConstStyle.C_WHITE};
  border-radius: 15px;
`;

const PaginationItemsWrapper = styled.div`
  padding: 10px 0;
  background-color: ${ConstStyle.C_WHITE};
  border-radius: 15px;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0 10px 20px;
  font-size: 22px;
  line-height: 24px;
`;

export {Wrapper, DataItemsWrapper, PaginationItemsWrapper, Title};
