import httpClient from '../httpClient/httpClient';

export default {
  getAllServerConfigs() {
    return httpClient.get(`/get-all-server-configs`);
  },
};
