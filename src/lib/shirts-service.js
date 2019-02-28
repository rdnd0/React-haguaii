import axios from 'axios';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:5000',
    })
  }

  getIllustrations() {
    return this.api.get('/illustrations')
      .then(({data}) => data);
  }
}



const api = new Api();
export default api;