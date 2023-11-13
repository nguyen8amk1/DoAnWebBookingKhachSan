import express from "express";
import controller from "../controller/controller.js";
const multer = require('multer');

const router = express.Router();
const storage = multer.memoryStorage(); // Use memory storage for handling multiple files
const upload = multer({ storage: storage });

const initRouters = (app) => {
    router.get('/', controller.getHomePage);
    router.get('/searchforplaces', controller.searchForPlaces);
    router.get('/hoteldetails', controller.getHotelDetails);
    router.post('/post-crud', controller.postCrud);
    router.post('/uploadImages', upload.array('images', 100), controller.uploadImages);
    app.use('/', router);
}

export default {
    initRouters: initRouters
};