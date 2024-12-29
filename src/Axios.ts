import axios from "axios"
const baseURL = import.meta.env.APP_API_URL;

const Axios = axios.create({ baseURL: baseURL, withCredentials: true, });

export default Axios;