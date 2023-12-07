import { QueryTypes } from 'sequelize';
import db, { sequelize } from '../models/index.js';
const jwt = require('jsonwebtoken');

const Sequelize = require('sequelize');
const User = require('../models/user')(sequelize, Sequelize.DataTypes,
    Sequelize.Model);

const STATUS_CODE_LIST = {
    // login
    LOGIN_SUCCESS: 200, // OK 
    LOGIN_FAIL: 401, // Unauthorized

    // register 
    REGISTER_FAIL: 409, // Conflict  
    REGISTER_SUCCESS: 201, // Created 
};

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' })
}

const refreshTokens = [];

const checkUserCredential = async (username, password) => {
    // TODO: Connect to database to check, but currently just have some fixed values 
    const instance = await User.findOne({where: { 
        username: username, 
        password: password
    }});
    // console.log(instance);
    // return !!instance;
    return instance;
}

const login = async (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    const role = "user";
    // TODO: check step: 
    const u= await checkUserCredential(username, password);
    const userExist = !!u;
    if (!userExist) {
        return res.status(STATUS_CODE_LIST.LOGIN_FAIL).json({ error: "User not exist" })
    }
    const user = {
        username: username,
        role: role// get from database  
    }
    // res.json({msg: "hello nguoi dung co ton tai em nhe :v"});
    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

    // NOTE: this refresh token push thing, should be push to database
    refreshTokens.push(refreshToken);


    return res.json({ accessToken: accessToken, refreshToken: refreshToken, userInfo: {username: username, userid: u.dataValues.id, avatar: null}});
}

const register = async (req, res) => {
    // Nothing related to JWT, just put the data into the database as usual  
    console.log(req.body);
    console.log("TODO: Checking things up before insert");
    console.log("TODO: Hash the password");
    const user = req.body;
    console.log("About to add the user: " + user);

    const newUser = await User.create(
        { 
            firstName: req.body.firstname, lastName: req.body.lastname,  
            username: req.body.username, password: req.body.password, 
            role: "customer" 
        }
        );
    // by this point, the user has been saved to the database!
    console.log("Jane's auto-generated ID:", newUser.id);

    // const userExist = sequelize.User.findOne({where: {username: username}});
    // console.log(userExist);
    const userExist = false;
    if(userExist) return res.status(STATUS_CODE_LIST.REGISTER_FAIL).json({error: "User already exist!!!"}); // return user exit status  
    return res.status(STATUS_CODE_LIST.REGISTER_SUCCESS).json({msg:"Register successfully"});
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
