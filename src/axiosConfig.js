import axios from "axios";

const instance = axios.create({
  baseURL: "http://43.204.237.7:4000",
  // baseURL: "http://13.234.48.35:8000",

});

export default instance;
