'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		try {
			const bookingPlaces = [
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
					price: 12.5,
					dateRange: "20/12/2023-21/12/2023",
					userID: 1,
					roomID: 1,
					hotelID: 1,
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
					price: 12.5,
					dateRange: "20/12/2023-21/12/2023",
					userID: 1,
					roomID: 1,
					hotelID: 1,
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
					price: 12.5,
					dateRange: "20/12/2023-21/12/2023",
					userID: 1,
					roomID: 1,
					hotelID: 1,
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
					price: 12.5,
					dateRange: "20/12/2023-21/12/2023",
					userID: 1,
					roomID: 1,
					hotelID: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			];
			return queryInterface.bulkInsert('BookingPlaces', bookingPlaces);
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
