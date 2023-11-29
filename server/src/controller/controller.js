import { QueryTypes } from 'sequelize';
import db, { sequelize } from '../models/index.js';
import { storeImages } from '../services/imageServices.js';
const moment = require('moment');

const Sequelize = require('sequelize');
const User = require('../models/user')(sequelize, Sequelize.DataTypes,
    Sequelize.Model);
const Review = require('../models/review')(sequelize, Sequelize.DataTypes,
    Sequelize.Model);
const Image = require('../models/image')(sequelize, Sequelize.DataTypes,
    Sequelize.Model);
const Hotel = require('../models/hotel')(sequelize, Sequelize.DataTypes,
    Sequelize.Model);

const BookingPlaces = require('../models/booking-place.js')(sequelize, Sequelize.DataTypes,
    Sequelize.Model);
const BookedPlaces = require('../models/booked-place.js')(sequelize, Sequelize.DataTypes,
    Sequelize.Model);

/**
 * 
    How the authentication and authorization will work: 
    If the user is logged in 
        then having some more information that matches this user 
    Else: 
        can still do things but having less information
        -> Authenticate Token either works or not -> still go to next
        
    DO SOMETHING WITH THE AUTHENTICATION FROM THE CLIENTSIDE AS WELL 
 */

const middlewareAuthenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    // if (token == null) return res.sendStatus(401).json("Access token doesn't exist");
    if (token != null)  {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            console.log(err); 
            if (err) return res.sendStatus(403);
            req.user = user;
        });
    } else {
        const user = {
            role: "GUESS"
        }
        req.user = user;
    }
    next();
}

const middlewareUserAuthorization = async(req, res, next) => {
    // TODO: authorization here 
    console.log(req.user);
    const role = req.user.role; 
    const roleMapping = [];
}

const getHomePage = async (req, res) => {
    // const data = await db.User.findAll();
    // console.log("ditmesaigon", data);
    // return res.render("home.ejs", {data: JSON.stringify(data)});
}

const getCrud = async (req, res) => {
    console.log(req.body);
    return "Get Crud";
}

const postCrud = async (req, res) => {
    console.log(req.body);
    return "Post Crud";
    // return res.render('crud.ejs');
}

const nameMapping = (name) => {
    // Notes: this mapping is just temporary 
    switch(name) {
        case "Vung Tau": 
            return "vungtau";
        break;
        case "HCM": 
            return "hcm";
        break;
        case "Ha Noi": 
            return "hanoi";
        break;
        case "Da Nang": 
            return "danang";
        break;
        case "Da Lat": 
            return "dalat";
        break;
    }
}

const searchForPlaces = async (req, res) => {
    // + City 
    // @Note:The date is not working (for now :v)
    // + Date:
    //     + came 
    //     + leave
    // + Members count: 
    //     + adults
    //     + childrens

    // test url: 
    // http://bookinguit.click:8080/searchforplaces?city=Vung Tau&date_came=10/20/2023&date_leave=10/21/2023&members_count_adults=2&members_count_children=1

    console.log(req.query);
    let cityName = nameMapping(req.query.city);
    const queryStr = "SELECT Hotels.name, Hotels.id, Hotels.address, Hotels.score, Hotels.long, Hotels.lat FROM `Hotels` INNER JOIN `Cities` ON Hotels.cityID=Cities.id WHERE Cities.name=" + `'${cityName}'`;
    const [results, metadata] = await sequelize.query(queryStr, {type: QueryTypes.RAW});

    console.log(results);

    const testData = results; 
    return res.send(testData);
}

const getHotelDetails = async (req, res) => {
    // Return format: 
        // Name  
        // Price 
        // Score 
        // Images 

    // input: hotelsId 
    // test url: http://bookinguit.click:8080/hoteldetails?hotel_id=5
    const hotelId = req.query.id; 
    const queryStr = "SELECT * FROM `Hotels` WHERE Hotels.id=" + hotelId;
    const [results, metadata] = await sequelize.query(queryStr, {type: QueryTypes.SELECT});

    const images = await Image.findAll({where: {hotelID: hotelId}});
    const imgs = images.map((value, index) => value.dataValues.link);
    // console.log(imgs);

    const r = await Review.findAll({where: {hotelID: hotelId}});
    const reviews = r.map(value => value.dataValues);
    //      get the user whose do that reviews as well  

    const uandr = [];
    for(let i = 0; i < reviews.length; i++) {
        const review = reviews[i];
        const r = await User.findOne({where: {id: review.userID}, attributes: ['id', 'firstName', 'lastName', 'username']});
        uandr.push({user: r.dataValues, review: review});
    }

    console.log(uandr);

    const testData = {...results, imgs, uandr};
    console.log(testData);

    return res.send(testData);
}

const uploadHotel = async (req, res) => {
    console.log(req.body);
    const description = "THE AUTO GENERATED DESCRIPTION";
    const cityID = 1;
    const userid = parseInt(req.body.userid, 10);
    console.log("userid", userid)

    try {
        const newHotel = await Hotel.create(
            { 
                name: req.body.name,
                address: req.body.address,
                description: description,
                score: 10,
                cityID: cityID,
                userID: userid 
            }
        );

        console.log("New hotel id: ", newHotel.id);
        return res.status(200).json({msg: "Upload Hotel SUCCESS"});
    } catch (e) {
        console.log(e.message);
        return res.status(401).json({msg: "Upload Hotel SUCCESS"});
    }

}

const uploadImages = async (req, res) => {
    console.log("This suppose to print the uploaded images ");
    const result =  await storeImages(req.files);
    res.json(result);
}

const createBookOrder = async (req) => {
    const hotelid = req.body.hotelid;

    const bookingpersonid = req.body.userid;
    const roomid = req.body.roomid;
    const price = req.body.price;
    const daterange = req.body.daterange;

    console.log(hotelid, bookingpersonid, roomid, price, daterange);

    const booking = await BookingPlaces.create({
        price: 12.50000, 
        dateRange: daterange,
        userID: bookingpersonid,
        roomID: roomid,
        hotelID: hotelid,
    });

    const hotelresult = await Hotel.findOne({where: {id: hotelid}});
    const hotelownerid = hotelresult.dataValues.userID;
    
    const booked = await BookingPlaces.create({
        price: 12.50000, 
        dateRange: daterange,
        userID: hotelownerid,
        roomID: roomid,
        hotelID: hotelid,
    });
}

const vnPayCreateOrder = async (req, res) => {
    await createBookOrder(req);

    process.env.TZ = 'Asia/Ho_Chi_Minh';

    let date = new Date();
    let createDate = moment(date).format('YYYYMMDDHHmmss');

    let ipAddr = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    // let config = require('config');
    let tmnCode = process.env.VNPAY_CODE;
    let secretKey = process.env.VNPAY_SECRET;
    let vnpUrl =  "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
    let returnUrl =  "http://localhost:3000/vnpay_return";
    // let returnUrl =  "http://localhost:3000/uploadhotel";

    let orderId = moment(date).format('DDHHmmss');
    let amount = req.body.amount;
    let bankCode = req.body.bankCode;

    let locale = req.body.language;
    if (locale === null || locale === '') {
        locale = 'vn';
    }
    let currCode = 'VND';
    let vnp_Params = {};
    vnp_Params['vnp_Version'] = '2.1.0';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    vnp_Params['vnp_Locale'] = locale;
    vnp_Params['vnp_CurrCode'] = currCode;
    vnp_Params['vnp_TxnRef'] = orderId;
    vnp_Params['vnp_OrderInfo'] = 'Thanh toan cho ma GD:' + orderId;
    vnp_Params['vnp_OrderType'] = 'other';
    vnp_Params['vnp_Amount'] = amount * 100;
    vnp_Params['vnp_ReturnUrl'] = returnUrl;
    vnp_Params['vnp_IpAddr'] = ipAddr;
    vnp_Params['vnp_CreateDate'] = createDate;
    if (bankCode !== null && bankCode !== '') {
        vnp_Params['vnp_BankCode'] = bankCode;
    }

    vnp_Params = sortObject(vnp_Params);

    let querystring = require('qs');
    let signData = querystring.stringify(vnp_Params, { encode: false });
    let crypto = require("crypto");
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");
    vnp_Params['vnp_SecureHash'] = signed;
    vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });

    res.send({ redirectUrl: vnpUrl });
}

const checkVNPaySuccess = (req, res) => {
    let vnp_Params = req.query;
    let secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);

    let config = require('config');
    let tmnCode = config.get('vnp_TmnCode');
    let secretKey = config.get('vnp_HashSecret');

    let querystring = require('qs');
    let signData = querystring.stringify(vnp_Params, { encode: false });
    let crypto = require("crypto");
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");

    if (secureHash === signed) {
        //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
        res.send({
            success: 'success', 
            code: vnp_Params['vnp_ResponseCode']
        }); 
    } else {
        res.send({
            success: 'success', 
            code: 97
        }); 
    }
}

const getCustomerBookingInfo = async (req, res) => {
    const result = [];
    const userid = req.query.userid;
    const data = await BookingPlaces.findAll({where: {userID: userid}});
    // const result = data.dataValues;
    // console.log(data.dataValues);

    // result = c
    for(let i = 0; i < data.length; i++) {
        const value = data[i];
        console.log(value.dataValues);
        const user = await User.findOne({where: {id: value.dataValues.userID}});
        const hotel = await Hotel.findOne({where: {id: value.dataValues.hotelID}});

        result.push({
            // tenphong: "booking ten", 
            // thongtinngaydenngaydi: value.dataValues.dataRange, 
            // bedroomCount: 1,
            // bedCount: 1, 
            // giaphong: value.dataValues.price, 
            // thanhtien: value.dataValues.price*2,    
            
            tenkhachsan: hotel.dataValues.name, 
            tenphong: "Phòng VIP cho 2 người", 
            tennguoithue: user.dataValues.firstName + " " + user.dataValues.lastName, 
            thongtinngaydenngaydi: "khongbiet", 
            bedroomCount: 1,
            bedCount: 1, 
            giaphong: 1000, 
            thanhtien: 19000,    
            // giaphong: value.dataValues.price, 
            // thanhtien: value.dataValues.price*2,    
        });
    }
    console.log(result);

    res.send(result);
}

const getManagerBookedInfo = async (req, res) => {
    console.log(req.query);
    const hotelid = 2;
    const userid = req.query.userid;
    // -> find in hotel that have USERID -> return it @Current 

    // const data = await BookedPlaces.findAll({where: {hotelID: hotelid}});
    // const result = [];

    // for(let i = 0; i < data.length; i++) {
    //     const value = data[i];
    //     console.log(value.dataValues);
    //     const user = await User.findOne({where: {id: value.dataValues.userID}});

    //     result.push({
    //         tenphong: "Phòng VIP cho 2 người", 
    //         tennguoithue: user.dataValues.firstName + " " + user.dataValues.lastName, 
    //         thongtinngaydenngaydi: value.dataValues.dataRange, 
    //         giaphong: value.dataValues.price, 
    //         thanhtien: value.dataValues.price*2,    
    //     });
    // }

    const data = await Hotel.findAll({where: {userID: userid}});
    console.log(data);
    const result = [];

    for(let i = 0; i < data.length; i++) {
        const value = data[i];
        // console.log(value.dataValues);
        // const user = await User.findOne({where: {id: value.dataValues.userID}});

        result.push({
            tenphong: value.dataValues.name, 
            // tennguoithue: user.dataValues.firstName + " " + user.dataValues.lastName, 
            tennguoithue: "chua ai thue",
            thongtinngaydenngaydi: value.dataValues.dataRange, 
            giaphong: value.dataValues.price, 
            thanhtien: value.dataValues.price*2,    
        });
    }

    console.log(result);

    res.send(result);
}

function sortObject(obj) {
	let sorted = {};
	let str = [];
	let key;
	for (key in obj){
		if (obj.hasOwnProperty(key)) {
		str.push(encodeURIComponent(key));
		}
	}
	str.sort();
    for (key = 0; key < str.length; key++) {
        sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
    }
    return sorted;
}


export default {
    getHomePage: getHomePage,    
    getCrud: getCrud,
    postCrud: postCrud, 
    searchForPlaces: searchForPlaces,
    getHotelDetails: getHotelDetails,
    uploadImages: uploadImages,
    uploadHotel: uploadHotel, 
    vnPayCreateOrder: vnPayCreateOrder,
    checkVNPaySuccess: checkVNPaySuccess, 
    getManagerBookedInfo: getManagerBookedInfo, 
    getCustomerBookingInfo: getCustomerBookingInfo, 
};
