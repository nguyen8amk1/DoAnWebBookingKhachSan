import axios from "axios";

export const createOrder = async (info) => {
    const redirectUrl = await axios.post("http://bookinguit.click:8080/create_payment_url", {
        amount: info.amount, 
        bankCode: info.bankCode,
        language: info.language,



        hotelid: info.hotelid , 
        userid: info.userid, 
        roomid: info.roomid, 
        price: info.price, 
        daterange: info.daterange, 
    }); 
    return redirectUrl;
}