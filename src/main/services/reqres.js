import axios from 'axios';

const instance = axios.create({ baseURL: BACKEND_URL });

const getUsers = async () => {
    try {
        const response = await instance.get('/users');
        return Promise.resolve(response.data);
    } catch (error) {
        return error;
    }
};

export default getUsers;
