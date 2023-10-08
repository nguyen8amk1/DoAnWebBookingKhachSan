import { QueryTypes } from 'sequelize';
import db, { sequelize } from '../models/index.js';

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
        
    // TODO: call the ORM to get the data needed with these parameters
    // + City 
    // @Note:The date is not working (for now :v)
    // + Date:
    //     + came 
    //     + leave
    // + Members count: 
    //     + adults
    //     + childrens

    // test url: 
    // http://127.0.0.1:8080/searchforplaces?city="Vung Tau"&date_came="10/20/2023"&date_leave="10/21/2023"&members_count_adults=2&members_count_children=1

    console.log(req.query);
    const queryStr = "SELECT Hotels.name, Cities.name FROM `Hotels` INNER JOIN `Cities` ON Hotels.cityID=Cities.id";
    const [results, metadata] = await sequelize.query(queryStr, {type: QueryTypes.SELECT});

    console.log(results);

    const testData = [results]; 
    return res.send(testData);
}

const getHotelDetails = async (req, res) => {
    // Return format: 
        // Name  
        // Price 
        // Score 
        // Images 

    // input: hotelsId 
    const hotelId = req.query.hotel_id; 
    console.log(hotelId);
    const queryStr = "SELECT * FROM `Hotels` WHERE Hotels.id=" + hotelId;
    const [results, metadata] = await sequelize.query(queryStr, {type: QueryTypes.SELECT});

    const testData = {
        results
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
