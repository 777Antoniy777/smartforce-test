import {RequestMessage, RequestStatus} from "../../js/enums";
import {RepositoriesActionCreator} from "./action-creator";

const RepositoriesAsyncActionCreator = {
  getRepositories: (username, perPage, page) => (dispatch, getState, api) => {
    return api.get(`users/${username}/repos?page=${page}&per_page=${perPage}`, {
      accept: 'application/vnd.github.v3+json',
    })
      .then((response) => {
        let {data} = response;

        const reposArr = data.map(elem => elem.name);
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;
        const obj = {
          array: reposArr,
          startIndex,
          endIndex,
        };

        dispatch(RepositoriesActionCreator.getRepositories(obj));
        dispatch(RepositoriesActionCreator.getCurrentRepository(''));
        dispatch(RepositoriesActionCreator.setRequestData({
          status: RequestStatus.OK,
          message: '',
        }));
      })
      .catch((error) => {
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
      dispatch(RepositoriesActionCreator.setRequestData({
        status: RequestStatus.OK,
        message: '',
      }));
    })
    .catch((error) => {
      dispatch(RepositoriesActionCreator.getCurrentRepository(''));
      dispatch(RepositoriesActionCreator.setRequestData({
        status: RequestStatus.ERROR,
        message: RequestMessage.ERROR_MESSAGE,
      }));

      throw error;
    });
  },
};

export {RepositoriesAsyncActionCreator};
