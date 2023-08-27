// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import axios from "axios";

//const baseUrl = "http://localhost:9000"
const baseUrl = "https://photoviewer.onrender.com"
const token = localStorage.getItem('token');

const get = (url) => {
    return axios.get(`${baseUrl}${url}`)
}

const create = (url, data) => {
    return axios.post(`${baseUrl}${url}`, data)
}

const remove = (url) => {
    return axios.delete(`${baseUrl}${url}`)
}


export default { get, create, remove }
