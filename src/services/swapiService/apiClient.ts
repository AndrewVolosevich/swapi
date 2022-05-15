import axios from "axios";

const apiClient = () => {
    const baseURL = 'https://swapi.dev/api/'

    const axiosInstance = axios.create({
        baseURL,
        responseType: 'json',
        headers: {
            "Content-type": "application/json"
        }
    })
    return axiosInstance
}

export default apiClient