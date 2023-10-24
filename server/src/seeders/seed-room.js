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
        const roomData = [];
        for (let i = 0; i < 25; i++) {
            roomData.push({
                prices: faker.number.int({ min: 1000000, max: 10000000 }).toLocaleString(),
                status: faker.number.int({ min: 0, max: 1 }).toLocaleString(),
                adultCount: faker.number.int({ min: 1, max: 4 }).toLocaleString(),
                childrenCount: faker.number.int({ min: 0, max: 2 }).toLocaleString(),
                occupationStar: faker.date.past().toLocaleDateString(),
                occupationEnd: faker.date.future().toLocaleDateString(),
                hotelID: faker.number.int({ min: 1, max: 25 }),
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }
        return queryInterface.bulkInsert('Rooms', roomData);
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
