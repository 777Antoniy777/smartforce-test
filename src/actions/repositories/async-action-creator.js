import {RequestMessage, RequestStatus} from "../../js/enums";
import {RepositoriesActionCreator} from "./action-creator";

// https://github.com/login/oauth/authorize
// https://api.github.com/users/${username}/repos?per_page=100
const RepositoriesAsyncActionCreator = {
  getRepositories: (username) => (dispatch, getState, api) => {
    return api.get(`https://api.github.com/users/${username}/repos?page=1&per_page=10`, {
      accept: 'application/vnd.github.v3+json',
    })
      .then((response) => {
        let {data} = response;
        console.log(data)
        const reposArr = data.map(elem => elem.name);
        // console.log(reposArr)

        dispatch(RepositoriesActionCreator.getRepositories(reposArr));
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
