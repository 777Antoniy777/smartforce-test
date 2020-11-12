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
    const isExistArray = this.checkArray();

    if (elem !== 1 && !isExistArray) {
      getRepositories(username, repositoriesPerPage, elem);
    }
  }

  checkArray = () => {
    const {repositories, repositoriesPerPage, elem} = this.props;
    const startIndex = (elem - 1) * repositoriesPerPage;
    const element = repositories.find((elem, i) => i === startIndex)

    return element;
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

const PaginationItems = ({repositories, username, repositoriesPerPage, reposAmount, getRepositories}) => {
  const buttons = [];
  const pageAmount = Math.ceil(reposAmount / repositoriesPerPage);

  for (let i = 0; i < pageAmount; i++) {
    buttons.push(
      <PaginationItem
        // properties
        key={i}
        elem={i + 1}
        index={i}
        repositories={repositories}
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
  repositories: PropTypes.arrayOf(PropTypes.string),
  username: PropTypes.string,
  repositoriesPerPage: PropTypes.number,
  getRepositories: PropTypes.func,
};

PaginationItems.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.string),
  username: PropTypes.string,
  repositoriesPerPage: PropTypes.number,
  reposAmount: PropTypes.number,
  getRepositories: PropTypes.func,
};


export default PaginationItems;
