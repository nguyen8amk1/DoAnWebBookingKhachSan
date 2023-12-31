import route from './route/route.js';
import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/connectDB.js';
import url from 'url';

import "dotenv/config";

const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

route.initRouters(app);
connectDB();

let port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("LISTENING ON PORT: ", port);
});
