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

        try {
            const data = await readJson("../scrapingTool/scrapedData/data.json");
            const hotelData = [];
            for (let i = 0; i < data.length; i++) {
                const hotels = data[i].hotels;
                for(let j = 0; j < hotels.length; j++) {
                    const hotel = hotels[j];
                    hotelData.push({
                        name: hotel.name,
                        address: hotel.address,
                        description: hotel.description,
                        score: hotel.score,
                        cityID: i + 1,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    });
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
