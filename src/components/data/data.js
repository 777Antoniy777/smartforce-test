import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getRepositories} from "../../selectors/repositories/selectors";
import {getReposAmount} from "../../selectors/user/selectors";
import {Wrapper, Title} from "./styles";
import DataItems from "../data-items/data-items";

const Data = ({repositories, reposAmount}) => {
  return (
    <React.Fragment>

      { reposAmount &&
        <Wrapper>
          <Title>У вас {reposAmount} репозиториев</Title>

          {/* Repositories list */}
          <DataItems
            // properties
            repositories={repositories}
          />
        </Wrapper>
      }

    </React.Fragment>
  );
};

Data.propTypes = {
  repositories: PropTypes.any,
  reposAmount: PropTypes.number,
};

const mapStateToProps = (state) => ({
  repositories: getRepositories(state),
  reposAmount: getReposAmount(state),
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Data);
