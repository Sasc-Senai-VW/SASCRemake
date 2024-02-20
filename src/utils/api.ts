import axios from "axios";

const api = axios.create({
  baseURL: "https://apisasc.azurewebsites.net/",

});

export default api;
