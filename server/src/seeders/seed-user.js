'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const userData = [
          {
            firstName: "nguyen",
            lastName: "nguyen",
            username: "NTTN",
            password: '12313213',
            email: "khongthenaooquenduocem@gmail.com",
            createdAt: new Date(),
            updatedAt: new Date(),
          }, 
          {
            firstName: "nguyen",
            lastName: "nguyen",
            username: "NTTN",
            password: '12313213',
            email: "khongthenaooquenduocem@gmail.com",
            createdAt: new Date(),
            updatedAt: new Date(),
          }, 
          {
            firstName: "nguyen",
            lastName: "nguyen",
            username: "NTTN",
            password: '12313213',
            email: "khongthenaooquenduocem@gmail.com",
            createdAt: new Date(),
            updatedAt: new Date(),
          }, 
          {
            firstName: "nguyen",
            lastName: "nguyen",
            username: "NTTN",
            password: '12313213',
            email: "khongthenaooquenduocem@gmail.com",
            createdAt: new Date(),
            updatedAt: new Date(),
          }, 
          {
            firstName: "nguyen",
            lastName: "nguyen",
            username: "NTTN",
            password: '12313213',
            email: "khongthenaooquenduocem@gmail.com",
            createdAt: new Date(),
            updatedAt: new Date(),
          }, 
          {
            firstName: "nguyen",
            lastName: "nguyen",
            username: "NTTN",
            password: '12313213',
            email: "khongthenaooquenduocem@gmail.com",
            createdAt: new Date(),
            updatedAt: new Date(),
          }, 
          {
            firstName: "nguyen",
            lastName: "nguyen",
            username: "NTTN",
            password: '12313213',
            email: "khongthenaooquenduocem@gmail.com",
            createdAt: new Date(),
            updatedAt: new Date(),
          }, 
          {
            firstName: "nguyen",
            lastName: "nguyen",
            username: "NTTN",
            password: '12313213',
            email: "khongthenaooquenduocem@gmail.com",
            createdAt: new Date(),
            updatedAt: new Date(),
          }, 
          {
            firstName: "nguyen",
            lastName: "nguyen",
            username: "NTTN",
            password: '12313213',
            email: "khongthenaooquenduocem@gmail.com",
            createdAt: new Date(),
            updatedAt: new Date(),
          }, 
          {
            firstName: "nguyen",
            lastName: "nguyen",
            username: "NTTN",
            password: '12313213',
            email: "khongthenaooquenduocem@gmail.com",
            createdAt: new Date(),
            updatedAt: new Date(),
          }, 
          {
            firstName: "nguyen",
            lastName: "nguyen",
            username: "NTTN",
            password: '12313213',
            email: "khongthenaooquenduocem@gmail.com",
            createdAt: new Date(),
            updatedAt: new Date(),
          }, 
        ];
        try {
            return queryInterface.bulkInsert('Users', userData);

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
