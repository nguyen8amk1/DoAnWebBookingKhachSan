import db from '../models/index.js';

const getHomePage = async (req, res) => {
    const data = await db.User.findAll();
    console.log("ditmesaigon", data);
    return res.render("home.ejs", {data: JSON.stringify(data)});
}

const getCrud = async (req, res) => {
    return res.render('crud.ejs');
}

const postCrud = async (req, res) => {
    console.log(req.body);
    // return res.render('crud.ejs');
}

export default {
    getHomePage: getHomePage,    
    getCrud: getCrud,
    postCrud: postCrud
};
