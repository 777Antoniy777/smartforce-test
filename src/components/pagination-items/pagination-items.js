import React from "react";
import PropTypes from 'prop-types';
import {List, Item, Button} from "./styles";

class PaginationItem extends React.PureComponent {
  state = {
    index: this.props.index,
    isPressed: false,
  }

  handleButtonClick = (evt) => {
    const {username, repositoriesPerPage, reposAmount, elem, getRepositories, setRepositoriesPage} = this.props;
    evt.preventDefault();
    const isExistArray = this.checkArray();
    setRepositoriesPage(elem);

    if (elem !== 1 && !isExistArray) {
      getRepositories(username, repositoriesPerPage, elem, null, reposAmount);
    }
  }

  checkArray = () => {
    const {repositories, repositoriesPerPage, elem} = this.props;
    const startIndex = (elem - 1) * repositoriesPerPage;
    const element = repositories.find((elem, i) => i === startIndex)

    return element;
  }

  render() {
    const {elem, repositoriesPage} = this.props;
    const {isPressed} = this.state;

    if (repositoriesPage === elem) {
      this.setState({
        isPressed: true,
      });
    } else {
      this.setState({
        isPressed: false,
      });
    }

    return (
      <Item>
        <Button ispressed={isPressed} type="button" onClick={this.handleButtonClick}>{elem}</Button>
      </Item>
    );
  }
}

const PaginationItems = ({repositories, username, repositoriesPerPage, repositoriesPage, reposAmount, getRepositories, setRepositoriesPage}) => {
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
        repositoriesPage={repositoriesPage}
        reposAmount={reposAmount}
        // handlers
        getRepositories={getRepositories}
        setRepositoriesPage={setRepositoriesPage}
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
  repositoriesPage: PropTypes.number,
  reposAmount: PropTypes.number,
  getRepositories: PropTypes.func,
  setRepositoriesPage: PropTypes.func,
};

PaginationItems.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.string),
  username: PropTypes.string,
  repositoriesPerPage: PropTypes.number,
  repositoriesPage: PropTypes.number,
  reposAmount: PropTypes.number,
  getRepositories: PropTypes.func,
  setRepositoriesPage: PropTypes.func,
};

export default PaginationItems;
