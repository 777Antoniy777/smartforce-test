import {RequestMessage, RequestStatus} from "../../js/enums";
import {RepositoriesActionCreator} from "./action-creator";

const RepositoriesAsyncActionCreator = {
  getRepositories: () => (dispatch, getState, api) => {
    return api.get('/test')
      .then((response) => {
        let {data} = response;

        dispatch(RepositoriesActionCreator.getRepositories(data));
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
