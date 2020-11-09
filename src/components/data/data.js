import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Wrapper, TableWrapper, Table, TableRow, TableTitle} from "./styles";
import DataRowItems from "../data-row-items/data-row-items";
import Error from "../error/error";

const Data = () => {
  return (
    <Wrapper>
      <TableWrapper>

        {/* Data rows */}
        <DataRowItems />

        {/* Error message */}
        <Error
          // properies
          requestData={[usersRequestData, temperatureRequestData]}
        />

      </TableWrapper>
    </Wrapper>
  );
};

Data.propTypes = {};

export default connect(
  null,
  null,
)(Data);
