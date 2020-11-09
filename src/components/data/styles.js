import styled from "styled-components";
import {ConstStyle} from "../app/const-styles";

const Wrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 30px;
  font-size: 13px;
  line-height: 15px;
  color: ${ConstStyle.C_BLACK};
  background-color: ${ConstStyle.C_LIGHTGRAY};
`;

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  background-color: ${ConstStyle.C_WHITE};
  border-radius: 15px;
`;

const Table = styled.table`
  width: 100%;
`;

const TableRow = styled.tr`
  display: flex;
  border-bottom: 1px solid ${ConstStyle.C_LIGHTGRAY};

  &.contains-row {
    display: flex;
    align-items: center;
    min-height: 60px;
  }
`;

const TableTitle = styled.th`
  width: 50%;
  padding: 10px;
  font-weight: 700;
  text-align: left;
`;

export {Wrapper, TableWrapper, Table, TableRow, TableTitle};
