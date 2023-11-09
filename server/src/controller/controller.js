import { QueryTypes } from 'sequelize';
import db, { sequelize } from '../models/index.js';

/**
 * 
    How the authentication and authorization will work: 
    If the user is logged in 
        then having some more information that matches this user 
    Else: 
        can still do things but having less information
        -> Authenticate Token either works or not -> still go to next
        
    DO SOMETHING WITH THE AUTHENTICATION FROM THE CLIENTSIDE AS WELL 
 */

const middlewareAuthenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    // if (token == null) return res.sendStatus(401).json("Access token doesn't exist");
    if (token != null)  {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            console.log(err); 
            if (err) return res.sendStatus(403);
            req.user = user;
        });
    } else {
        const user = {
            role: "GUESS"
        }
        req.user = user;
    }
    next();
}

const middlewareUserAuthorization = async(req, res, next) => {
    // TODO: authorization here 
    console.log(req.user);
    const role = req.user.role; 
    const roleMapping = [];
}

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
    // Notes: this mapping is just temporary 
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
    const hotelId = req.query.id; 
    const queryStr = "SELECT * FROM `Hotels` WHERE Hotels.id=" + hotelId;
    const [results, metadata] = await sequelize.query(queryStr, {type: QueryTypes.SELECT});

    const testData = results;

    return res.send(testData);
}

const uploadHotel = async (req, res) => {
    // TODO: List some information needed to register a hotel 
}

const viewBooking = async (req, res) => {
    // TODO: Return the result depends on the role 

}

export default {
    getHomePage: getHomePage,    
    getCrud: getCrud,
    postCrud: postCrud, 
    searchForPlaces: searchForPlaces,
    getHotelDetails: getHotelDetails
};
