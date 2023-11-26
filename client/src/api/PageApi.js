import axios from "axios";

export const searchForPlaces = async (destination, date, memberCount, room) => {
    const response = await axios.get(`http://127.0.0.1:8080/searchforplaces?city=${destination}&date_came=${date.came}&date_leave=${date.leave}&members_count_adults=${memberCount.adult}&members_count_children=${memberCount.children}&room_count=${room}`);
    return response.data;
}

export const getHotelDetail = async (id) => {
    console.log(id);
    const response = await axios.get("http://127.0.0.1:8080/hoteldetails?id="+id);
    return response.data;
}

export const uploadPlace = async (placeInfo) => {
    try {
        const result = await axios.post("http://127.0.0.1:8080/uploadHotel", placeInfo);
        return result;
    } catch(e) {
        console.error('Error uploading place:', e);
        return null;
    }
}

export const getBookInfo = async () => {
    try {
        const USER_TOKEN = localStorage.getItem("accessToken");
        const AuthStr = 'Bearer '.concat(USER_TOKEN); 
        const booking = await axios.get(`http://127.0.0.1:8080/getbookinginfo`, { headers: { Authorization: AuthStr } });
        const booked = await axios.get(`http://127.0.0.1:8080/getbookedinfo`,  { headers: { Authorization: AuthStr } });
        return {booked: booked.data, booking: booking.data};
    }
    catch(error) {
        return -1;
    }
}
export const getSearch = async (destination, date, options) => {
  const response = await axios.get(
    `http://127.0.0.1:8000/searchforplaces?city=${destination}`
  );
  return response.data;
};
