import {RequestMessage, RequestStatus} from "../../js/enums";
import {UserActionCreator} from "./action-creator";
import {RepositoriesActionCreator} from "../repositories/action-creator";

const UserAsyncActionCreator = {
  getUserData: (username) => (dispatch, getState, api) => {
    return api.get(`users/${username}`, {
      accept: 'application/vnd.github.v3+json',
    })
      .then((response) => {
        let {data} = response;

        dispatch(UserActionCreator.setUsername(username));
        dispatch(UserActionCreator.getReposAmount(data.public_repos));
        dispatch(RepositoriesActionCreator.setRepositoriesLength(data.public_repos));
        dispatch(UserActionCreator.setRequestData({
          status: RequestStatus.OK,
          message: '',
        }));
      })
      .catch((error) => {
        // dispatch(UserActionCreator.setUsername(''));
        dispatch(UserActionCreator.setRequestData({
          status: RequestStatus.ERROR,
          message: RequestMessage.ERROR_MESSAGE,
        }));

        throw error;
      });
  },
};

export {UserAsyncActionCreator};
