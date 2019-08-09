import axios from "axios";

const api = axios.create({
  baseURL: "https://dropbox-clone-oministack.herokuapp.com/"
});

export default api;
