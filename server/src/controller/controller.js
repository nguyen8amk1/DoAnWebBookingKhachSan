import { QueryTypes } from 'sequelize';
import db, { sequelize } from '../models/index.js';
import { storeImages } from '../services/imageServices.js';
const moment = require('moment');

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
    // http://127.0.0.1:8080/searchforplaces?city=Vung Tau&date_came=10/20/2023&date_leave=10/21/2023&members_count_adults=2&members_count_children=1

    console.log(req.query);
    let cityName = nameMapping(req.query.city);
    const queryStr = "SELECT Hotels.name, Hotels.id, Hotels.address, Hotels.score FROM `Hotels` INNER JOIN `Cities` ON Hotels.cityID=Cities.id WHERE Cities.name=" + `'${cityName}'`;
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
    // test url: http://127.0.0.1:8080/hoteldetails?hotel_id=5
    const hotelId = req.query.id; 
    const queryStr = "SELECT * FROM `Hotels` WHERE Hotels.id=" + hotelId;
    const [results, metadata] = await sequelize.query(queryStr, {type: QueryTypes.SELECT});

    const testData = results;

    return res.send(testData);
}

const uploadHotel = async (req, res) => {
    // TODO: List some information needed to register a hotel 
    console.log(req.body);
}

const uploadImages = async (req, res) => {
    console.log("This suppose to print the uploaded images ");
    const result =  await storeImages(req.files);
    res.json(result);
}


const vnPayCreateOrder = async (req, res) => {
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
    let returnUrl =  "http://localhost:8080/vnpay_return";

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
    const result = [
        {
            tenkhachsan: "Ten khach san", 
            roomname: "room name", 
            thongtinngaydenngaydi: "10/21/2021 - 11/20/2021", 
            bedroomCount: 1,
            bedCount: 1, 
            giaphong: 100, 
            thanhtien: 1000,
        }, 
        {
            tenkhachsan: "Ten khach san", 
            roomname: "room name", 
            thongtinngaydenngaydi: "10/21/2021 - 11/20/2021", 
            bedroomCount: 1,
            bedCount: 1, 
            giaphong: 100, 
            thanhtien: 1000,
        }
    ];

    res.send(result);
}

const getManagerBookedInfo = async (req, res) => {
    const result = [
        {
            tenphong: "Ten phong", 
            tennguoithue: "Ditmesaigon", 
            thongtinngaydenngaydi: "10/21/2021 - 11/20/2021", 
            giaphong: 100, 
            thanhtien: 100, 
        }, 
        {
            tenphong: "Ten phong", 
            tennguoithue: "Ditmesaigon", 
            thongtinngaydenngaydi: "10/21/2021 - 11/20/2021", 
            giaphong: 100, 
            thanhtien: 100, 
        }, 
    ];
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
