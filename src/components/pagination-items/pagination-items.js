import React from "react";
import PropTypes from 'prop-types';
import {List, Item, Button} from "./styles";

class PaginationItem extends React.PureComponent {
  state = {
    index: this.props.index,
  }

  handleButtonClick = (evt) => {
    const {username, repositoriesPerPage, elem, getRepositories} = this.props;
    evt.preventDefault();

    if (elem !== 1) {
      getRepositories(username, repositoriesPerPage, elem);
    }
  }

  render() {
    const {elem} = this.props;

    return (
      <Item>
        <Button type="button" onClick={this.handleButtonClick}>{elem}</Button>
      </Item>
    );
  }
}

const PaginationItems = ({username, repositoriesPerPage, reposAmount, getRepositories}) => {
  const buttons = [];
  const pageAmount = Math.ceil(reposAmount / repositoriesPerPage);

  for (let i = 0; i < pageAmount; i++) {
    buttons.push(
      <PaginationItem
        // properties
        key={i}
        elem={i + 1}
        index={i}
        username={username}
        repositoriesPerPage={repositoriesPerPage}
        // handlers
        getRepositories={getRepositories}
      />
    );
  }

  return (
    <React.Fragment>
      { reposAmount &&
        <List>
          {buttons}
        </List>
      }
    </React.Fragment>
  );
};

PaginationItem.propTypes = {
  elem: PropTypes.number,
  index: PropTypes.number,
  username: PropTypes.string,
  repositoriesPerPage: PropTypes.number,
  getRepositories: PropTypes.func,
};

PaginationItems.propTypes = {
  username: PropTypes.string,
  repositoriesPerPage: PropTypes.number,
  reposAmount: PropTypes.number,
  getRepositories: PropTypes.func,
};


export default PaginationItems;
