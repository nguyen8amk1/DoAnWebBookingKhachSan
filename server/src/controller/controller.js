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

const nameMapping = (name) => {

    switch(name) {
        case "Vung Tau": 
            return "vungtau";
        break;
        case "HCM": 
            return "hcm";
        break;
        case "Ha Noi": 
            return "hanoi";
        break;
        case "Da Nang": 
            return "danang";
        break;
        case "Da Lat": 
            return "dalat";
        break;
    }
}

const searchForPlaces = async (req, res) => {
    // + City 
    // @Note:The date is not working (for now :v)
    // + Date:
    //     + came 
    //     + leave
    // + Members count: 
    //     + adults
    //     + childrens

    // test url: 
    // http://127.0.0.1:8080/searchforplaces?city=Vung Tau&date_came=10/20/2023&date_leave=10/21/2023&members_count_adults=2&members_count_children=1

    console.log(req.query);
    let cityName = nameMapping(req.query.city);
    const queryStr = "SELECT Hotels.name, Hotels.id, Hotels.address, Hotels.description, Hotels.images, Hotels.score, Hotels.review FROM `Hotels` INNER JOIN `Cities` ON Hotels.cityID=Cities.id" + ` WHERE Cities.name='${cityName}'`;
    const [results, metadata] = await sequelize.query(queryStr, {type: QueryTypes.RAW});

    console.log(results);

    const testData = results; 
    return res.send(testData);
}

const getHotelDetails = async (req, res) => {
    // Return format: 
        // Name  
        // Price 
        // Score 
        // Images 

    // input: hotelsId 
    // test url: http://127.0.0.1:8080/hoteldetails?hotel_id=5
    const hotelId = req.query.hotel_id; 
    console.log(hotelId);
    const queryStr = "SELECT * FROM `Hotels` WHERE Hotels.id=" + hotelId;
    const [results, metadata] = await sequelize.query(queryStr, {type: QueryTypes.SELECT});

    const testData = results;

    return res.send(testData);
}

export default {
    getHomePage: getHomePage,    
    getCrud: getCrud,
    postCrud: postCrud, 
    searchForPlaces: searchForPlaces,
    getHotelDetails: getHotelDetails
};
