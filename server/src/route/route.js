import express from "express";
import controller from "../controller/controller.js";

const router = express.Router();

export const initRouters = (app) => {
    router.get('/', controller.getHomePage);
    router.get('/searchforplaces', controller.searchForPlaces);
    router.get('/hoteldetails', controller.getHotelDetails);
    router.post('/post-crud', controller.postCrud);

    app.use('/', router);
}

export const initAuthRouters = (app) => {
    // router.post('/login');
    // router.post('/logout');

    app.use('/', router);
}

// export {
//     initRouters: initRouters,
//     initAuthRouters: initAuthRouters
// };