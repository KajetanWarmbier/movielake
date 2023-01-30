import axios from "axios";

export const fetchContent = async (endpoint, query = {}) => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/${endpoint}`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        ...query,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};
