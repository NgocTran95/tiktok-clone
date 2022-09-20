import axios from 'axios';

console.log(process.env);

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, {
        ...options,
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    });
    return response.data;
};

export default httpRequest;
