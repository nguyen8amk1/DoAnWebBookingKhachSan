import db from '../models/index.js';

const getHomePage = async (req, res) => {
    // const data = await db.User.findAll();
    // console.log("ditmesaigon", data);
    // return res.render("home.ejs", {data: JSON.stringify(data)});
}

const getCrud = async (req, res) => {
    console.log(req.body);
    return "Get Crud";
}

const postCrud = async (req, res) => {
    console.log(req.body);
    return "Post Crud";
    // return res.render('crud.ejs');
}

const searchForPlaces = async (req, res) => {
    // Return format: 
        // Name  
        // Price 
        // Score 
        // Images 

    const testData = {
        name: '',
        price: '',
        score: '',
        images: ''
    };

    return res.send(testData);
}

const getHotelDetails = async (req, res) => {
    // Return format: 
        // Name  
        // Price 
        // Score 
        // Images 

    const testData = {
        name: '',
        price: '',
        score: '',
        images: [
            "" 
        ]
    };

    return res.send(testData);
}

export default {
    getHomePage: getHomePage,    
    getCrud: getCrud,
    postCrud: postCrud, 
    searchForPlaces: searchForPlaces,
    getHotelDetails: getHotelDetails
};
