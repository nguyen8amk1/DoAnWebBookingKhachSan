import { QueryTypes } from 'sequelize';
import db, { sequelize } from '../models/index.js';
const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' })
}

const refreshTokens = [];

const checkUserCredential = (username, password) => {
    // TODO: Connect to database to check, but currently just have some fixed values 
    if(!(username === "ditme" && password==='saigon')) {
        return false;
    }
    return true;
}

const login = async (req, res) => {
    console.log(req.body);
    const username = req.body.username; 
    const password = req.body.password;
    const role = "user";
    // TODO: check step: 
    const userExist = checkUserCredential(username, password);
    if(!userExist) {
        res.status(400).json({error: "User not exist"})
    }
    const user = {
        username: username,
        role: role// get from database  
    }
    // res.json({msg: "ditme nguoi dung co ton tai em nhe :v"});
    const accessToken = generateAccessToken(user); 
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    refreshTokens.push(refreshToken);
    res.json({ accessToken: accessToken, refreshToken: refreshToken }); 
}

const register = async (req, res) => {
    // Nothing related to JWT, just put the data into the database as usual  

}

const logout = async (req, res) => {

}

export default { 
    login: login,
    register: register, 
    logout: logout,
}