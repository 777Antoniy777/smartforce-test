import {RepositoriesActionType} from "../../actions/repositories/action-creator";
import {updateArray, changeArrayLength} from "../../actions/action-helpers";

const initialState = {
  repositories: [],
  currentRepository: '',
  repositoriesPerPage: 7,
  page: null,
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

    case RepositoriesActionType.GET_CURRENT_REPOSITORY:
      return {
        ...state,
        currentRepository: action.payload,
      };

    case RepositoriesActionType.SET_REPOSITORIES_PAGE:
      return {
        ...state,
        page: action.payload,
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
