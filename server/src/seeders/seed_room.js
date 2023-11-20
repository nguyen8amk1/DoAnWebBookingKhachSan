'use strict';
const fs = require("fs");
const util = require("util");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		try {
			const rooms = 
			[
				{
					prices: 10.5,
					adultCount: 1,
					childrenCount: 2,
					occupationStart: "20/12/2023",
					occupationEnd: "21/12/2023",
					hotelID: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
				},
				{
					prices: 10.5,
					adultCount: 1,
					childrenCount: 2,
					occupationStart: "",
					occupationEnd: "",
					hotelID: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
				},
				{
					prices: 10.5,
					adultCount: 1,
					childrenCount: 2,
					occupationStart: "",
					occupationEnd: "",
					hotelID: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
				},
				{
					prices: 10.5,
					adultCount: 1,
					childrenCount: 2,
					occupationStart: "",
					occupationEnd: "",
					hotelID: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
				},

				{
					prices: 10.5,
					adultCount: 1,
					childrenCount: 2,
					occupationStart: "",
					occupationEnd: "",
					hotelID: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
				},
				{
					prices: 10.5,
					adultCount: 1,
					childrenCount: 2,
					occupationStart: "",
					occupationEnd: "",
					hotelID: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
				},
				{
					prices: 10.5,
					adultCount: 1,
					childrenCount: 2,
					occupationStart: "",
					occupationEnd: "",
					hotelID: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
				},
			];

			return queryInterface.bulkInsert('Rooms', rooms);
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
