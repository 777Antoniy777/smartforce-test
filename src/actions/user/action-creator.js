const UserActionType = {
  GET_REPOS_AMOUNT: 'GET_REPOS_AMOUNT',
  SET_USERNAME: 'SET_USERNAME',
  SET_USER_REQUEST_DATA: 'SET_USER_REQUEST_DATA',
};

const UserActionCreator = {
  getReposAmount: (data) => ({
    type: UserActionType.GET_REPOS_AMOUNT,
    payload: data,
  }),

  setUsername: (data) => ({
    type: UserActionType.SET_USERNAME,
    payload: data,
  }),

  setRequestData: (data) => ({
    type: UserActionType.SET_USER_REQUEST_DATA,
    payload: data,
  }),
};

export {UserActionType, UserActionCreator};
