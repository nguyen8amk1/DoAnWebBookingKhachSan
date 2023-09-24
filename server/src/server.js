import configViewEngine from './config/viewEngine.js'
import initRoutes from './route/route.js'
import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/connectDB.js';

import 'dotenv/config.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

configViewEngine(app);
initRoutes(app); 
connectDB();

let port = process.env.PORT || 8000; 

app.listen(port, () => {
    console.log("LISTENING ON PORT: ", port);
});