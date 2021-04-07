import axios from 'axios';
// "proxy": "http://localhost:8000",
const instance = axios.create({
  baseURL: `http://localhost:8000/`
});

export default instance