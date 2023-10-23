import express from "express";
import authController   from "../controller/authController";

const router = express.Router();

const initAuthRouters = (app) => {
    router.post('/login', authController.login);
    router.post('/logout', authController.logout);

    app.use('/', router);
}

export default {
    initAuthRouters: initAuthRouters
}