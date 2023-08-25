import axios from "axios";

const baseUrl = "http://localhost:9000"


const get = (url) => {
    return axios.get(`${baseUrl}${url}`)
}

const create = (url, data) => {
    return axios.post(`${baseUrl}${url}`, data)
}


export default { get, create }
