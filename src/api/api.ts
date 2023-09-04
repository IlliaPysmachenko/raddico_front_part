import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.2.237:8888/api/',
});

const test2 = axios.create({
  baseURL: 'http://192.168.2.237:8080/dcm4chee-arc',
  headers: {
    'Content-Type': 'application/json', // Устанавливаем "Content-Type" на JSON
    // Другие заголовки, если необходимо
  },
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

export const studiesActionsApi = {
  async sendStudyAction(data: any) {
    const response = await instance.post('exporters', data);
    return response.data;
  },
  async zipStudies(data: any) {
    const response = await instance.post('zip/dicom-multiple', data);
    return response.data;
  },
  async trackZipStatus(id: string) {
    const response = await instance.get(`zip/dicom-multiple/${id}`);
    return response.data;
  },
};

export const aeTitlesApi = {
  async getAeTitles() {
    const response = await instance.get('aetitles');
    return response.data;
  },
  async createAeTitle(data: any) {
    const response = await instance.post('aetitles', data);
    return response.data;
  },
  async verifyAeTitle(data: string) {
    const response = await instance.get(`aetitles/${data}/echo`);
    return response.data;
  },
  async deleteAeTitle(data: string) {
    const response = await instance.delete(`aetitles/${data}`);
    return response.data;
  },
  async updateAeTitle(data: any) {
    const response = await instance.put(`aetitles/${data.ae_title}`, JSON.stringify(data));
    return response.data;
  },
};
