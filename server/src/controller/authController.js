import { QueryTypes } from 'sequelize';
import db, { sequelize } from '../models/index.js';
const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' })
}

const refreshTokens = [];

const checkUserCredential = (username, password) => {
    // TODO: Connect to database to check, but currently just have some fixed values 
    if (!(username === "ditme" && password === 'saigon')) {
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
    if (!userExist) {
        return res.status(400).json({ error: "User not exist" })
    }
    const user = {
        username: username,
        role: role// get from database  
    }
    // res.json({msg: "ditme nguoi dung co ton tai em nhe :v"});
    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

    // NOTE: this refresh token push thing, should be push to database
    refreshTokens.push(refreshToken);

    return res.json({ accessToken: accessToken, refreshToken: refreshToken, userInfo: {username: username, avatar: null}});
}

const register = async (req, res) => {
    // Nothing related to JWT, just put the data into the database as usual  
    console.log(req.body);
    const user = req.body;
    console.log("About to add the user: " + user);
    res.json({ditme:"ditmemay"});
    // const userExist = sequelize.User.findOne({where: {username: username}});
    // if(userExist) return res.status(403).json({error: "User already exist!!!"}); // return user exit status  
}

const getNewToken = async (req, res) => {
    const refreshToken = req.body.token;
    if (refreshToken == null) return res.sendStatus(401).json({ error: "There is no refresh token" });
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403).json({ error: "The refresh token does not exist"});

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403).json({error: "Refresh token does not valid"});
        const accessToken = generateAccessToken({ name: user.name });
        res.json({ accessToken: accessToken });
    })
}

const logout = async (req, res) => {
    // TODO: change this to delete from the database  
    refreshTokens = refreshTokens.filter(token => token !== req.body.token);
    res.sendStatus(204);
}


export default {
    getNewToken: getNewToken,
    login: login,
    register: register,
    logout: logout,
}