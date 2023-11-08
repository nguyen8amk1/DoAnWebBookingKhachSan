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

export const register = async (firstname, lastname, username, password, role) => {
    console.log(firstname, lastname, username, password);
    const response = await axios.post('http://127.0.0.1:9000/register', {
        firstname: firstname, 
        lastname: lastname, 
        username: username, 
        password: password,
        role: role
    });
    return response.data;
}