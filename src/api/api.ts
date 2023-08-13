import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.2.237:8888/api',

});

// eslint-disable-next-line import/prefer-default-export
export const searchApi = {
  async getValues() {
    const response = await instance.get('search');
    // console.log(response);
    return response.data;
  },
  async getPatientStudies(data: any) {
    const response = await instance.post('search', data);
    // console.log(response.data);
    return response.data;
  },
};
