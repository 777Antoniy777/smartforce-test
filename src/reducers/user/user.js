import {UserActionType} from "../../actions/user/action-creator";

const initialState = {
  reposAmount: null,
  requestData: {
    status: null,
    message: '',
  },
};

export default function createState(state = initialState, action) {
  switch (action.type) {
    case UserActionType.GET_REPOS_AMOUNT:
      return {
        ...state,
        reposAmount: action.payload,
      };

    case UserActionType.SET_USER_REQUEST_DATA:
      return {
        ...state,
        requestData: action.payload,
      };

    default:
      return state;
  }
}
