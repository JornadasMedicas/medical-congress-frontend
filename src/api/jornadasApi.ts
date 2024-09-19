import axios, { AxiosInstance } from 'axios';

const jornadasApi: AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_URL_API_JORNADAS}`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default jornadasApi;