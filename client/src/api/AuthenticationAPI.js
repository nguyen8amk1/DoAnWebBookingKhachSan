import axios from 'axios';

export const login = async (username, password) => {
    const response = await axios.post('http://127.0.0.1:9000/login', {
        username: username, 
        password: password
    });
    return response.data;
}

export const logout = async () => {
    // await axios.post('', {
    // });
}