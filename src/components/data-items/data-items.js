import React from "react";
import PropTypes from 'prop-types';
import {List, Item} from "./styles";

const DataItem = ({elem}) => {
  return (
    <React.Fragment>
      { elem &&
        <Item>{elem}</Item>
      }
    </React.Fragment>
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
  elem: PropTypes.string,
};

DataItems.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.string),
};

export default DataItems;
