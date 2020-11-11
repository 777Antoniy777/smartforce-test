const getReposAmount = (state) => {
  return state.user.reposAmount;
};

const getUserRequestData = (state) => {
  return state.user.requestData;
};

export {getReposAmount, getUserRequestData};
