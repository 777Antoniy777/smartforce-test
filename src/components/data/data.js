import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getRepositories, getCurrentRepository, getRepositoriesPage, getCountRepositories} from "../../selectors/repositories/selectors";
import {getReposAmount, getUsername} from "../../selectors/user/selectors";
import {RepositoriesActionCreator} from "../../actions/repositories/action-creator";
import {RepositoriesAsyncActionCreator} from "../../actions/repositories/async-action-creator";
import {Wrapper, DataItemsWrapper, PaginationItemsWrapper, Title} from "./styles";
import DataItems from "../data-items/data-items";
import PaginationItems from "../pagination-items/pagination-items";

const Data = ({username, repositories, currentRepository, repositoriesPage, repositoriesPerPage, reposAmount, getRepositories, setRepositoriesPage}) => {
  const startIndex = (repositoriesPage - 1) * repositoriesPerPage;
  const endIndex = startIndex + repositoriesPerPage;
  const slicedRepositories = repositories.slice(startIndex, endIndex)

  const createDataItemsWrapper = () => {
    let component = null;

    if (username) {
      component = (
        <DataItemsWrapper>
          <Title>У вас {reposAmount} репозиториев</Title>

          {/* Repositories list */}
          <DataItems
            // properties
            repositories={slicedRepositories}
          />
        </DataItemsWrapper>
      )
    }

    if (currentRepository) {
      component = (
        <DataItemsWrapper>
          <Title>Найден репозиторий</Title>

          {/* Repositories list */}
          <DataItems
            // properties
            repositories={[currentRepository]}
          />
        </DataItemsWrapper>
      )
    }

    return component;
  }

  return (
    <Wrapper>

      {createDataItemsWrapper()}

      { !currentRepository &&
        <React.Fragment>
          <PaginationItemsWrapper>

            {/* Repositories list */}
            <PaginationItems
              // properties
              repositories={repositories}
              username={username}
              repositoriesPerPage={repositoriesPerPage}
              reposAmount={reposAmount}
              // handlers
              getRepositories={getRepositories}
              setRepositoriesPage={setRepositoriesPage}
            />

          </PaginationItemsWrapper>
        </React.Fragment>
      }

    </Wrapper>
  );
};

Data.propTypes = {
  username: PropTypes.string,
  repositories: PropTypes.arrayOf(PropTypes.string),
  currentRepository: PropTypes.string,
  repositoriesPage: PropTypes.number,
  repositoriesPerPage: PropTypes.number,
  reposAmount: PropTypes.number,
  getRepositories: PropTypes.func,
  setRepositoriesPage: PropTypes.func,
};

const mapStateToProps = (state) => ({
  username: getUsername(state),
  repositories: getRepositories(state),
  currentRepository: getCurrentRepository(state),
  repositoriesPage: getRepositoriesPage(state),
  repositoriesPerPage: getCountRepositories(state),
  reposAmount: getReposAmount(state),
});

const mapDispatchToProps = (dispatch) => ({
  getRepositories: (username, count, page) => {
    dispatch(RepositoriesAsyncActionCreator.getRepositories(username, count, page));
  },
  setRepositoriesPage: (page) => {
    dispatch(RepositoriesActionCreator.setRepositoriesPage(page));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Data);
