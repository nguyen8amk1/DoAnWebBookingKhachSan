import axios from 'axios';

export const login = async (username, password) => {
    try {
        const response = await axios.post('http://103.162.20.157:9000/login', {
            username: username, 
            password: password
        });
        return response.data;
    }
    catch(error) {
        return -1;
    }
}

export const logout = async () => {
    // await axios.post('', {
    // });
}

export const register = async (firstname, lastname, username, password, role) => {
    console.log(firstname, lastname, username, password);
    const response = await axios.post('http://103.162.20.157:9000/register', {
        firstname: firstname, 
        lastname: lastname, 
        username: username, 
        password: password,
        role: role
    });
    return response.data;
}