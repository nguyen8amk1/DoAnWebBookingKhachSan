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
        // const { faker } = require('@faker-js/faker');
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */

        try {
            const data = await readJson("../scrapingTool/scrapedData/data.json");
            const cityData = [];
            for (let i = 0; i < data.length; i++) {
                cityData.push({
                    name: data[i].city,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });
            }

            return queryInterface.bulkInsert('Cities', cityData);
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
