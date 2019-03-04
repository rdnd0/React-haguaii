import axios from 'axios';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
    })
  }

  getIllustrations() {
    return this.api.get('/illustrations')
      .then(({data}) => data);
  }
}



const api = new Api();
export default api;