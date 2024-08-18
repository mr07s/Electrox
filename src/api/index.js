import axios from "axios";

const Api = axios.create({ baseURL: process.env.REACT_APP_API });

console.log(Api);
Api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // console.log({ error });
    return false;
  }
);

export default Api;
