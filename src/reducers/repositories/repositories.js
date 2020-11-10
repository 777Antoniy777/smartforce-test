import {repositories} from "../../mocks/repositories";
import {RepositoriesActionType} from "../../actions/repositories/action-creator";

const initialState = {
  repositories: repositories,
  requestData: {
    status: null,
    message: '',
  },
};

export default function createState(state = initialState, action) {
  switch (action.type) {
    case RepositoriesActionType.GET_REPOSITORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case RepositoriesActionType.SET_REPOSITORIES_REQUEST_DATA:
      return {
        ...state,
        requestData: action.payload,
      };

    default:
      return state;
  }
}
