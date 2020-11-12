import {RepositoriesActionType} from "../../actions/repositories/action-creator";
import {updateArray, changeArrayLength} from "../../actions/action-helpers";

const initialState = {
  repositories: [],
  repositoriesPerPage: 7,
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
        repositories: updateArray(state.repositories, action.payload),
      };

    case RepositoriesActionType.SET_REPOSITORIES_LENGTH:
      return {
        ...state,
        repositories: changeArrayLength(state.repositories, action.payload),
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
