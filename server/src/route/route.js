import express from "express";
import controller from "../controller/controller.js";

const router = express.Router();

const initRouters = (app) => {
    router.get('/', controller.getHomePage);
    router.get('/ditme', (req, res) => {
        return res.send('DITMESAIGON');
    });
    router.get('/searchforplaces', controller.searchForPlaces);
    router.get('/hoteldetails', controller.getHotelDetails);
    router.post('/post-crud', controller.postCrud);

    app.use('/', router);
}

export default initRouters;