const getRepositories = (state) => {
  return state.repositories.repositories;
};

const getCountRepositories = (state) => {
  return state.repositories.repositoriesPerPage;
};

const getRepositoriesRequestData = (state) => {
  return state.repositories.requestData;
};

export {getRepositories, getCountRepositories, getRepositoriesRequestData};
