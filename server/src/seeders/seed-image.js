'use strict';
const fs = require("fs");
const util = require("util");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		try {
			const hotels = 
			[
				{
					link: "https://cf2.bstatic.com/xdata/images/hotel/max1280x900/479457742.jpg?k=66b99f04add14309148d982f408e7f2992534cced9aa65a188a86e2a546e2056&o=&hp=1",
					createdAt: new Date(),
					updatedAt: new Date(),
				}, 
				{
					link: "https://cf2.bstatic.com/xdata/images/hotel/max1280x900/496509512.jpg?k=c7f10f7de29f125168db60529a6ecf1a8b972614c67c05267926dedb01d6ec76&o=&hp=1",
					createdAt: new Date(),
					updatedAt: new Date(),
				}, 
				{
					link: "https://cf2.bstatic.com/xdata/images/hotel/max1280x900/299103201.jpg?k=a2d73b3e6c40c4aeb0c2147171ae586371dadf84999b1426704526e1398ed568&o=&hp=1",
					createdAt: new Date(),
					updatedAt: new Date(),
				}, 
				{
					link: "https://cf2.bstatic.com/xdata/images/hotel/max1280x900/496509721.jpg?k=02281dc534376d92cc7418f369517074830bb997c523ffd545ba395f9dd1397c&o=&hp=1",
					createdAt: new Date(),
					updatedAt: new Date(),
				}, 
				{
					link: "https://cf2.bstatic.com/xdata/images/hotel/max1280x900/496508499.jpg?k=b25f0dc86490f6da062aa16460ab7db0169d7d284fbb538336f3681a91193083&o=&hp=1",
					createdAt: new Date(),
					updatedAt: new Date(),
				}, 
				{
					link: "https://cf2.bstatic.com/xdata/images/hotel/max1280x900/496508879.jpg?k=807734e1da4fe3c11e8e69e9598e007b0b21e8f94375e14268fad3e7cc36fac8&o=&hp=1",
					createdAt: new Date(),
					updatedAt: new Date(),
				}, 
			];

			const images = [];
			for(let i = 1; i < hotels.length; i++){
				hotels[i]['hotelID'] = i;
				images.push(hotels[i]); 
			}

			return queryInterface.bulkInsert('Images', images);
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
