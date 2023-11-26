import express from "express";
import controller from "../controller/controller.js";
const multer = require('multer');

const router = express.Router();
const storage = multer.memoryStorage(); // Use memory storage for handling multiple files
const upload = multer({ storage: storage });
const jwt = require('jsonwebtoken');

const initRouters = (app) => {
    router.get('/', controller.getHomePage);

    router.get('/searchforplaces', controller.searchForPlaces);
    router.get('/hoteldetails', controller.getHotelDetails);

    router.post('/uploadImages', upload.array('images', 100), controller.uploadImages);
    // router.post('/uploadHotel', authenticateToken, controller.uploadHotel);
    // router.post('/uploadImages', upload.array('images', 100), controller.uploadImages);
    router.post('/uploadHotel', controller.uploadHotel);

    router.get('/getbookinginfo', authenticateToken, controller.getCustomerBookingInfo);
    router.get('/getbookedinfo', authenticateToken, controller.getManagerBookedInfo);
    // router.get('/getbookinginfo', controller.getCustomerBookingInfo);
    // router.get('/getbookedinfo',  controller.getManagerBookedInfo);

    router.post('/create_payment_url', controller.vnPayCreateOrder);
    router.get('/vnpay_return', controller.checkVNPaySuccess);

    router.post('/post-crud', controller.postCrud);
    app.use('/', router);
}

function authenticateToken(req, res, next) {
    // console.log(req.files);
    const authHeader = req.headers['authorization']
    console.log(authHeader);
    if (!authHeader) {
        console.log("Authorization header is missing");
        return res.sendStatus(401);
    }
    const token = authHeader && authHeader.split(' ')[1]; 
    if (token == 'null') {
        return res.sendStatus(401); 
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        console.log(err)
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

function authorizeToken(req, res, next) {
    // TODO: authorize the token

}

export default {
    initRouters: initRouters
};