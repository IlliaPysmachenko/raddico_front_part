import axios from "axios";


const instance = axios.create({
    baseURL: "http://192.168.2.237/",

});

export const searchApi = {
    getValues() {
        return instance.get(`search`)
            .then((response) => {
                console.log(response)
                return response
            });
    },
    setCompletedList(id: number, completed: boolean) {

        return instance.put(`lists/${id}`, {"data": {"isCompleted": completed}})
            .then((response) => response.data.data);
    }
}