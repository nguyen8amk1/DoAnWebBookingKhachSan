import axios from 'axios';

export const searchForPlaces = async (destination, date, memberCount) => {
    const response = await axios.get(`http://127.0.0.1:8080/searchforplaces?city=${destination}&date_came=${date.came}&date_leave=${date.leave}&members_count_adults=${memberCount.adult}&members_count_children=${memberCount.children}`);
    return response.data;
}

export const getHotelDetail = async (id) => {
    console.log(id);
    const response = await axios.get("http://127.0.0.1:8080/hoteldetails?id="+id);
    // TODO: actually call the api 
    // const response = {
    //     data: {
    //         ten: "ditmesaigon", 
    //         diachi: "khong biet", 
    //         diem: "8.3",  
    //         danhgia: [
    //             "tot vailkon luon a tr", 
    //             "tot vailkon luon a tr", 
    //             "tot vailkon luon a tr", 
    //             "tot vailkon luon a tr", 
    //         ], 
    //         anh: [
    //             "https://tik180.com/wp-content/uploads/2022/10/tiktoker-ninh-anh-6-1.jpg", 
    //             "https://tik180.com/wp-content/uploads/2022/10/tiktoker-ninh-anh-6-1.jpg", 
    //             "https://tik180.com/wp-content/uploads/2022/10/tiktoker-ninh-anh-6-1.jpg", 
    //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgzINmB6RhRK9q6O73Myl5YiHM1KjwCvlVMOGT4UJqw&s", 
    //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgzINmB6RhRK9q6O73Myl5YiHM1KjwCvlVMOGT4UJqw&s", 
    //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgzINmB6RhRK9q6O73Myl5YiHM1KjwCvlVMOGT4UJqw&s", 
    //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgzINmB6RhRK9q6O73Myl5YiHM1KjwCvlVMOGT4UJqw&s", 
    //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgzINmB6RhRK9q6O73Myl5YiHM1KjwCvlVMOGT4UJqw&s", 
    //         ],  
    //     }
    // };
    return response.data;
}

export const uploadPlace = async (placeInfo) => {
    // const response = await axios.get(`http://127.0.0.1:8080/searchforplaces?city=${destination}&date_came=${date.came}&date_leave=${date.leave}&members_count_adults=${memberCount.adult}&members_count_children=${memberCount.children}`);
    // return response.data;
    return null;
}