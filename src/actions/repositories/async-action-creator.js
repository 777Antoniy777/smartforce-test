import {RequestMessage, RequestStatus} from "../../js/enums";
import {RepositoriesActionCreator} from "./action-creator";
import {UserActionCreator} from "../user/action-creator";

const RepositoriesAsyncActionCreator = {
  getRepositories: (username, perPage, page, isFirstLoading, reposAmount) => (dispatch, getState, api) => {
    return api.get(`users/${username}/repos?page=${page}&per_page=${perPage}`, {
      accept: 'application/vnd.github.v3+json',
    })
      .then((response) => {
        let {data} = response;

        const reposArr = data.map(elem => elem.name);
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;
        let obj = {};

        if (isFirstLoading) {
          obj = {
            array: reposArr,
            flag: isFirstLoading,
          };
        } else {
          obj = {
            array: reposArr,
            startIndex,
            endIndex,
            reposAmount,
          };
        }

        dispatch(RepositoriesActionCreator.getRepositories(obj));
        dispatch(RepositoriesActionCreator.getCurrentRepository(''));
        dispatch(UserActionCreator.setUsername(username));
        dispatch(RepositoriesActionCreator.setRequestData({
          status: RequestStatus.OK,
          message: '',
        }));
      })
      .catch((error) => {
        dispatch(RepositoriesActionCreator.getCurrentRepository(''));
        dispatch(UserActionCreator.setUsername(''));
        dispatch(RepositoriesActionCreator.setRequestData({
          status: RequestStatus.ERROR,
          message: RequestMessage.ERROR_MESSAGE,
        }));

        throw error;
      });
  },

  getCurrentRepository: (username, repository) => (dispatch, getState, api) => {
    return api.get(`repos/${username}/${repository}`, {
      accept: 'application/vnd.github.v3+json',
    })
    .then((response) => {
      const {data} = response;

      dispatch(RepositoriesActionCreator.getCurrentRepository(data.name));
      dispatch(UserActionCreator.setUsername(username));
      dispatch(RepositoriesActionCreator.setRequestData({
        status: RequestStatus.OK,
        message: '',
      }));
    })
    .catch((error) => {
      dispatch(RepositoriesActionCreator.getCurrentRepository(''));
      dispatch(UserActionCreator.setUsername(''));
      dispatch(RepositoriesActionCreator.setRequestData({
        status: RequestStatus.ERROR,
        message: RequestMessage.ERROR_MESSAGE,
      }));

      throw error;
    });
  },
};

export {RepositoriesAsyncActionCreator};
