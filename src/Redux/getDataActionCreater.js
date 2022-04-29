import axios from "axios";
import actions from "./getDataAction";
const { getDataAction } = actions;

const getData = async () => {
  try {
    const response = await axios.get("/portfolio/get");
    console.log("Data : ", response.data);
    return response.data[0];
  } catch (err) {
    console.log(err);
  }
};

export const getDataActionCreater = () => {
  return async (dispatch) => {
    try {
      let data = await getData();
      dispatch(getDataAction(data));
    } catch (err) {
      console.log(err.response);
    }
  };
};
