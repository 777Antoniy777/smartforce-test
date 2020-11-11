import React from "react";
import PropTypes from 'prop-types';
import {List, Item} from "./styles";

const DataItem = ({elem}) => {
  return (
    <Item>{elem}</Item>
  );
}

const DataItems = ({repositories}) => {
  return (
    <List>
      { repositories.length > 0 &&
        repositories.map(elem =>
        <DataItem
          // properties
          key={elem}
          elem={elem}
        />
      )}
    </List>
  );
};

DataItem.propTypes = {
  elem: PropTypes.any,
};

DataItems.propTypes = {
  repositories: PropTypes.any,
};

export default DataItems;
