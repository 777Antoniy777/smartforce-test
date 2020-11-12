const RepositoriesActionType = {
  GET_REPOSITORIES: 'GET_REPOSITORIES',
  GET_CURRENT_REPOSITORY: 'GET_CURRENT_REPOSITORY',
  SET_REPOSITORIES_PAGE: 'SET_REPOSITORIES_PAGE',
  SET_REPOSITORIES_REQUEST_DATA: 'SET_REPOSITORIES_REQUEST_DATA',
};

const RepositoriesActionCreator = {
  getRepositories: (data) => ({
    type: RepositoriesActionType.GET_REPOSITORIES,
    payload: data,
  }),

  getCurrentRepository: (data) => ({
    type: RepositoriesActionType.GET_CURRENT_REPOSITORY,
    payload: data,
  }),

  setRepositoriesPage: (data) => ({
    type: RepositoriesActionType.SET_REPOSITORIES_PAGE,
    payload: data,
  }),

  setRequestData: (data) => ({
    type: RepositoriesActionType.SET_REPOSITORIES_REQUEST_DATA,
    payload: data,
  }),
};

export {RepositoriesActionType, RepositoriesActionCreator};
