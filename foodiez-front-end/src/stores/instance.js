import axios from "axios";
// connecting front to back end :
const instance = axios.create({
  baseURL: "http://localhost:8000",
});

export default instance;
