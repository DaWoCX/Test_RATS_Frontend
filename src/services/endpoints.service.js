import httpClient from '../httpClient/httpClient';

export default {
  getAllServerEndpoints() {
    return httpClient.get(`/get-all-server-endpoints`);
  },
};
