import React from "react";
import PropTypes from 'prop-types';
import {List, Item} from "./styles";

const DataItem = ({elem}) => {
  const {id, title} = elem;

  return (
    <Item>{title}</Item>
  );
}

const DataItems = ({repositories}) => {
  return (
    <List>
      { repositories.length > 0 &&
        repositories.map((elem, i) =>
        <DataItem
          // properties
          key={elem.id}
          elem={elem}
        />
      )}
    </List>
  );
};

export default DataItems;
