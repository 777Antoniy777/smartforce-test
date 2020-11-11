import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getRepositories, getCountRepositories} from "../../selectors/repositories/selectors";
import {getReposAmount, getUsername} from "../../selectors/user/selectors";
import {RepositoriesAsyncActionCreator} from "../../actions/repositories/async-action-creator";
import {Wrapper, DataItemsWrapper, PaginationItemsWrapper, Title} from "./styles";
import DataItems from "../data-items/data-items";
import PaginationItems from "../pagination-items/pagination-items";

const Data = ({username, repositories, repositoriesPerPage, reposAmount, getRepositories}) => {
  return (
    <Wrapper>

      { reposAmount &&
        <React.Fragment>
          <DataItemsWrapper>
            <Title>У вас {reposAmount} репозиториев</Title>

            {/* Repositories list */}
            <DataItems
              // properties
              repositories={repositories}
            />
          </DataItemsWrapper>

          <PaginationItemsWrapper>

            {/* Repositories list */}
            <PaginationItems
              // properties
              username={username}
              repositoriesPerPage={repositoriesPerPage}
              reposAmount={reposAmount}
              // handlers
              getRepositories={getRepositories}
            />

          </PaginationItemsWrapper>
        </React.Fragment>
      }

    </Wrapper>
  );
};

Data.propTypes = {
  username: PropTypes.string,
  repositories: PropTypes.any,
  repositoriesPerPage: PropTypes.number,
  reposAmount: PropTypes.number,
  getRepositories: PropTypes.func,
};

const mapStateToProps = (state) => ({
  username: getUsername(state),
  repositories: getRepositories(state),
  repositoriesPerPage: getCountRepositories(state),
  reposAmount: getReposAmount(state),
});

const mapDispatchToProps = (dispatch) => ({
  getRepositories: (username, count, page) => {
    dispatch(RepositoriesAsyncActionCreator.getRepositories(username, count, page));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Data);
