import axios from "axios"
import axiosClient from "../utils/axiosClient";
import { TOKEN } from "../utils/config";

export default class BaseService {
    get = (url) => {
        return axiosClient({
            url,
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(TOKEN)
            } 
        })
    }
    postWithoutHeader = (url, model) => {
        return axiosClient({
            method: 'POST',
            url,
            data: model,
        })
    }
    post = (url, model) => {
        return axiosClient({
            method: 'POST',
            url,
            data: model,
            headers: {
                'Authorization': "Bearer " + localStorage.getItem(TOKEN)
            } 
        })
    }
}