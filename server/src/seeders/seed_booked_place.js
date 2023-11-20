'use strict';
const fs = require("fs");
const util = require("util");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		try {
			const bookedPlaces = 
			[
				{
					price: 13.5,
					dateRange: "20/12/2023-21/12/2023",
					userID: 1,
					roomID: 1,
					hotelID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
				},
				{
					price: 12.5,
					dateRange: "20/12/2023-21/12/2023",
					userID: 1,
					roomID: 1,
					hotelID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
				},
				{
					price: 13.5,
					dateRange: "20/12/2023-21/12/2023",
					userID: 1,
					roomID: 1,
					hotelID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
				},
				{
					price: 12.5,
					dateRange: "20/12/2023-21/12/2023",
					userID: 1,
					roomID: 1,
					hotelID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
				},
				{
					price: 13.5,
					dateRange: "20/12/2023-21/12/2023",
					userID: 1,
					roomID: 1,
					hotelID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
				},
				{
					price: 12.5,
					dateRange: "20/12/2023-21/12/2023",
					userID: 1,
					roomID: 1,
					hotelID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
				},
				{
					price: 13.5,
					dateRange: "20/12/2023-21/12/2023",
					userID: 1,
					roomID: 1,
					hotelID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
				},
				{
					price: 12.5,
					dateRange: "20/12/2023-21/12/2023",
					userID: 1,
					roomID: 1,
					hotelID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
				},
				{
					price: 13.5,
					dateRange: "20/12/2023-21/12/2023",
					userID: 1,
					roomID: 1,
					hotelID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
				},
				{
					price: 12.5,
					dateRange: "20/12/2023-21/12/2023",
					userID: 1,
					roomID: 1,
					hotelID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
				},
				{
					price: 13.5,
					dateRange: "20/12/2023-21/12/2023",
					userID: 1,
					roomID: 1,
					hotelID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
				},
				{
					price: 12.5,
					dateRange: "20/12/2023-21/12/2023",
					userID: 1,
					roomID: 1,
					hotelID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
				},
			];

			return queryInterface.bulkInsert('BookedPlaces', bookedPlaces);
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
