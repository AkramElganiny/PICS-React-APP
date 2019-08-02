import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 
            'Client-ID d4d148b52b054c1da65cb94c07796ae1311f8ec85d87d331bb30311c2b865f19'
    }
});