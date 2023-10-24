'use strict';

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
        const hotelData = [];
        for (let i = 0; i < 25; i++) {
            hotelData.push({
                name: faker.person.fullName(),
                address: faker.location.streetAddress(),
                description: faker.lorem.sentence({ min: 5, max: 10 }),
                images: faker.lorem.word(),
                score: faker.number.int({ min: 1, max: 10 }).toLocaleString(),
                review: faker.person.bio(),
                cityID: faker.number.int({ min: 1, max: 25 }),
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }
        return queryInterface.bulkInsert('Hotels', hotelData);
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
