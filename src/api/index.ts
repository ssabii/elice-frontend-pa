import axios from "axios";

const BASE_URL = "https://api-rest.elice.io";

const client = axios.create({
  baseURL: BASE_URL,
});

export default client;
