const getReposAmount = (state) => {
  return state.user.reposAmount;
};

const getUsername = (state) => {
  return state.user.username;
};

const getUserRequestData = (state) => {
  return state.user.requestData;
};

export {getReposAmount, getUsername, getUserRequestData};
