import axios from "axios";


const appAxios = axios.create({
    baseURL: 'http://localhost:3000'
  });

  appAxios.defaults.timeout = 2500;

  export default appAxios;