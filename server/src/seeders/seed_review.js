'use strict';
// TODO: 
	// ERROR: user not seeded first 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		try {
			const reviewData = [
				{
					hotelID: 1,  
					userID: 1, 
					content: "Phòng đẹp quá tr quá đất luôn mấy má ơi!!", 
					createdAt: new Date(),
					updatedAt: new Date(),
				}, 
				{
					hotelID: 2,  
					userID: 1, 
					content: "Phòng xấu quá tr quá đất luôn mấy má ơi!!",
					createdAt: new Date(),
					updatedAt: new Date(),
				}, 
				{
					hotelID: 2,  
					userID: 1, 
					content: "Phòng nhôn lừ", 	
					createdAt: new Date(),
					updatedAt: new Date(),
				}, 
				{
					hotelID: 1,  
					userID: 1, 
					content: "Phòng đẹp quá tr quá đất luôn mấy má ơi!!", 
					createdAt: new Date(),
					updatedAt: new Date(),
				}, 
				{
					hotelID: 2,  
					userID: 1, 
					content: "Phòng xấu quá tr quá đất luôn mấy má ơi!!",
					createdAt: new Date(),
					updatedAt: new Date(),
				}, 
				{
					hotelID: 2,  
					userID: 1, 
					content: "Phòng nhôn lừ", 	
					createdAt: new Date(),
					updatedAt: new Date(),
				}, 
				{
					hotelID: 1,  
					userID: 1, 
					content: "Phòng đẹp quá tr quá đất luôn mấy má ơi!!", 
					createdAt: new Date(),
					updatedAt: new Date(),
				}, 
				{
					hotelID: 2,  
					userID: 1, 
					content: "Phòng xấu quá tr quá đất luôn mấy má ơi!!",
					createdAt: new Date(),
					updatedAt: new Date(),
				}, 
				{
					hotelID: 2,  
					userID: 1, 
					content: "Phòng nhôn lừ", 	
					createdAt: new Date(),
					updatedAt: new Date(),
				}, 
			];
			return queryInterface.bulkInsert('Reviews', reviewData);
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
