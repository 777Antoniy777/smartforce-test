const getRepositories = (state) => {
  return state.repositories.repositories;
};

const getRepositoriesRequestData = (state) => {
  return state.repositories.requestData;
};

export {getRepositories, getRepositoriesRequestData};
