// Minha Chave do BitLy: 3c8a34119cab3474c0313505239ebd88da9d2906

import axios from 'axios';

export const key = "3c8a34119cab3474c0313505239ebd88da9d2906"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;