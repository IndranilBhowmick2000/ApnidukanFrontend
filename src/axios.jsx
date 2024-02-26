import axios from "axios";

const instance = axios.create({
  baseURL: "https://apnidukanbackend-2.onrender.com/",
});

export default instance;