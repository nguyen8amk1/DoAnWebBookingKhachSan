import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/connectDB.js';
import url from 'url';

import 'dotenv/config';
import route from './route/authRoute.js';

const app = express();
const cors = require('cors'); 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

route.initAuthRouters(app);
connectDB();

let port = process.env.AUTH_PORT || 9999; 

app.listen(port, () => {
    console.log("LISTENING FOR AUTHENTICATION ON PORT: ", port);
});