'use strict';
const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);

async function readJson(fileName) {
    try {
        // Read the specified JSON file using promisified fs.readFile.
        const data = await readFileAsync(fileName);

        // Parse the JSON data.
        const student = JSON.parse(data);
        // console.log(student); // Print the student data.
        return student; // Return the student data.
    } catch (err) {
        throw err; // Throw any errors encountered during the process.
    }
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const { faker } = require('@faker-js/faker');
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */
        // name: 'John',
        // address: 'Hawaii',
        // description: 'view bien',
        // images: '123',
        // score: '5',
        // review: 'good',
        // cityID: 1,
        // createdAt: new Date(),
        // updatedAt: new Date()

        const generateRandomCoordinate = (min, max) => {
            return Math.random() * (max - min) + min;
        }

        const hcmcCenter = { latitude: 10.7769, longitude: 106.7009 }; // Ho Chi Minh City center
        const generateRandomLocation = () => {
            const latitude = generateRandomCoordinate(10.7, 10.9); // Adjust the latitude range as needed
            const longitude = generateRandomCoordinate(106.5, 106.9); // Adjust the longitude range as needed

            let distance = 10; 
            while (distance > .3) {
                // Calculate distance from the center to filter out locations too far away (optional)
                distance = Math.sqrt(
                    Math.pow(latitude - hcmcCenter.latitude, 2) +
                    Math.pow(longitude - hcmcCenter.longitude, 2)
                );

                // Filter locations within a certain distance from the center (adjust as needed)
                if (distance < 0.3) {
                    return { latitude, longitude };
                }
            }
        }

        const generateRandomLocations = () => {

            const locations = [];

            for (let i = 0; i < 100; i++) {
                locations.push(generateRandomLocation());
                // const latitude = this.generateRandomCoordinate(10.7, 10.9); // Adjust the latitude range as needed
                // const longitude = this.generateRandomCoordinate(106.5, 106.9); // Adjust the longitude range as needed

                // // Calculate distance from the center to filter out locations too far away (optional)
                // const distance = Math.sqrt(
                //     Math.pow(latitude - hcmcCenter.latitude, 2) +
                //     Math.pow(longitude - hcmcCenter.longitude, 2)
                // );

                // // Filter locations within a certain distance from the center (adjust as needed)
                // if (distance < 0.3) {
                //     locations.push({ latitude, longitude });
                // }
            }

            return locations;
        }

        // TODO: CHANGE THE MODEL AS WELL 

        try {
            const data = await readJson("../scrapingTool/scrapedData/data.json");
            const hotelData = [];
            for (let i = 0; i < data.length; i++) {
                const hotels = data[i].hotels;
                for(let j = 0; j < hotels.length; j++) {
                    const hotel = hotels[j];

                    const latitude = generateRandomCoordinate(10.7, 10.9); // Adjust the latitude range as needed
                    const longitude = generateRandomCoordinate(106.5, 106.9); // Adjust the longitude range as needed

                    let distance = 10; 
                    while (distance > .3) {
                        // Calculate distance from the center to filter out locations too far away (optional)
                        distance = Math.sqrt(
                            Math.pow(latitude - hcmcCenter.latitude, 2) +
                            Math.pow(longitude - hcmcCenter.longitude, 2)
                        );

                        // Filter locations within a certain distance from the center (adjust as needed)
                        if (distance < 0.3) {
                            hotelData.push({
                                userID: Math.floor(Math.random()*25), 
                                name: hotel.name,
                                address: hotel.address,
                                description: hotel.description,
                                score: hotel.score,
                                cityID: i + 1,
                                long: longitude,  
                                lat:  latitude,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                            });
                            
                        }
                    }
                }
            }

            return queryInterface.bulkInsert('Hotels', hotelData);

        } catch (err) {
            console.error("An error occurred:", err);
        }
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
