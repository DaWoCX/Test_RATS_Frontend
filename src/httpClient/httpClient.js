import axios from 'axios';
import httpClientConfig from '../../configs/httpClient.config';
import authHeader from '../services/auth.header';

export default axios.create({
  baseURL: httpClientConfig.baseURL,
  header: authHeader(),
});
