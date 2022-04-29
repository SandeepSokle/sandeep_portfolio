const getDataReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

module.exports = {
  getDataReducer,
};
