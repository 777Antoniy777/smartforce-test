import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getRepositories, getRepositoriesRequestData} from "../../selectors/repositories/selectors";
import {Wrapper} from "./styles";
import DataItems from "../data-items/data-items";

const Data = ({repositories, repositoriesRequestData}) => {
  return (
    <Wrapper>

      {/* Repositories list */}
      <DataItems
        // properties
        repositories={repositories}
      />

      {/* Error message */}
      {/* <Error
        // properies
        requestData={[repositoriesRequestData]}
      /> */}

    </Wrapper>
  );
};

Data.propTypes = {};

const mapStateToProps = (state) => ({
  repositories: getRepositories(state),
  repositoriesRequestData: getRepositoriesRequestData(state),
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Data);
