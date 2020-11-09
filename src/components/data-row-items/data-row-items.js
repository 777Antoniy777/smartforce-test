import React from "react";
import PropTypes from 'prop-types';
import {TableRow} from "../data/styles";
import {TableCell} from "./styles";

class DataRowItem extends React.PureComponent {
  state = {};

  render() {
    return (
      <div>test</div>
    );
  }
}

const DataRowItems = () => {
  return (
    <React.Fragment>
      { data.length > 0 &&
        data.map((elem, i) =>
        <DataRowItem />
      )}
    </React.Fragment>
  );
};

export default DataRowItems;
