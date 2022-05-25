import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://nlw-return-impulse-server-production-4720.up.railway.app/'
})