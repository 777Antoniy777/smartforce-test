import {RequestMessage, RequestStatus} from "../../js/enums";
import {RepositoriesActionCreator} from "./action-creator";

// https://github.com/login/oauth/authorize
// https://api.github.com/users/${username}/repos?per_page=100
const RepositoriesAsyncActionCreator = {
  getRepositories: (username, count, page) => (dispatch, getState, api) => {
    return api.get(`https://api.github.com/users/${username}/repos?page=${page}&per_page=${count}`, {
      accept: 'application/vnd.github.v3+json',
    })
      .then((response) => {
        let {data} = response;

        const reposArr = data.map(elem => elem.name);
        const startIndex = (page - 1) * count;
        const endIndex = startIndex + count;
        const obj = {
          array: reposArr,
          startIndex,
          endIndex,
        };

        dispatch(RepositoriesActionCreator.getRepositories(obj));
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
};

export {RepositoriesAsyncActionCreator};
