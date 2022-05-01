const actions = {
  getDataAction: (data) => {
    console.log("In getDataAction  : ", data)
    return {
      type: "GET_DATA",
      payload : data,
    };
  },
};

module.exports = {
  actions
}