import { v2 as cloudinary } from 'cloudinary';
let streamifier = require('streamifier');
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


// TODO: what behaviour we want to achieve 
// Upload all the images asynchronously 
// Wait for all of them to get successfully uploaded 
// Push all the result.url to urls array 
// Return the urls array  

const storeImage = async (imageBuffer, options = {}) => {
    // return new Promise((resolve, reject) => {

    // });

    let cld_upload_stream = cloudinary.uploader.upload_stream(
        options,
        (error, result) => {
            // if(error) {
            //     reject(`Failed to upload image to Cloudinary: ${error.message}`);
            // }
            console.log(error, result); 
        });
    streamifier.createReadStream(imageBuffer).pipe(cld_upload_stream);
}; 

export const storeImages = async (images) => {
    // TODO: upload the images to the cloudinary server @Current 
    // const urls = [];
    for (const image of images) {
        storeImage(image.buffer);
    }
    // console.log(urls);
    // return urls;
}