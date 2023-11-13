import axios from 'axios';

export const searchForPlaces = async (destination, date, memberCount) => {
    const response = await axios.get(`http://127.0.0.1:8080/searchforplaces?city=${destination}&date_came=${date.came}&date_leave=${date.leave}&members_count_adults=${memberCount.adult}&members_count_children=${memberCount.children}`);
    return response.data;
}

export const getHotelDetail = async (id) => {
    console.log(id);
    const response = await axios.get("http://127.0.0.1:8080/hoteldetails?id="+id);
    return response.data;
}

export const uploadPlace = async (placeInfo) => {
    // const response = await axios.get(`http://127.0.0.1:8080/searchforplaces?city=${destination}&date_came=${date.came}&date_leave=${date.leave}&members_count_adults=${memberCount.adult}&members_count_children=${memberCount.children}`);
    // return response.data;
    return null;
}