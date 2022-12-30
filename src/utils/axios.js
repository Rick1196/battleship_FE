import * as axiosLibrary from "axios";

const axios = axiosLibrary.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
});

export default axios;
