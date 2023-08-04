import axios from "axios";


const instance = axios.create({
    baseURL: "http://192.168.2.237:8888/api",

});

export const searchApi = {
    getValues() {
        return instance.get(`search`)
            .then((response) => {
                console.log(response)
                return response
            });
    },
    getPatientStudies(data:any) {
        return instance.post(`search`, data)
            .then((response) => response);
    }
}