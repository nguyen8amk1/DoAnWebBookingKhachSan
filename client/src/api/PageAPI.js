import axios from 'axios';

export const getSearch = async (destination, date, options) => {
    const response = await axios.get(`http://127.0.0.1:8000/searchforplaces?city=${destination}`)
    return response.data
}


export const getDitme = async () => {
    const response = await axios.get('http://127.0.0.1:8080/ditme');
    return response.data;
}