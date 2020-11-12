const getRepositories = (state) => {
  return state.repositories.repositories;
};

const getCurrentRepository = (state) => {
  return state.repositories.currentRepository;
};

const getRepositoriesPage = (state) => {
  return state.repositories.page;
};

const getCountRepositories = (state) => {
  return state.repositories.repositoriesPerPage;
};

const getRepositoriesRequestData = (state) => {
  return state.repositories.requestData;
};

export {getRepositories, getCurrentRepository, getRepositoriesPage, getCountRepositories, getRepositoriesRequestData};
