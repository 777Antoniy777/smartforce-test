const RepositoriesActionType = {
  GET_REPOSITORIES: 'GET_REPOSITORIES',
  SET_REPOSITORIES_REQUEST_DATA: 'SET_REPOSITORIES_REQUEST_DATA',
};

const RepositoriesActionCreator = {
  getRepositories: (data) => ({
    type: RepositoriesActionType.GET_REPOSITORIES,
    payload: data,
  }),

  setRequestData: (data) => ({
    type: RepositoriesActionType.SET_REPOSITORIES_REQUEST_DATA,
    payload: data,
  }),
};

export {RepositoriesActionType, RepositoriesActionCreator};
