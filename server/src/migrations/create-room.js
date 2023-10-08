'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Rooms', {
            // prices: DataTypes.STRING,
            // status: DataTypes.BOOLEAN,
            // adultCount: DataTypes.STRING,
            // childrenCount: DataTypes.STRING,
            // occupationStar: DataTypes.STRING,
            // occupationEnd: DataTypes.STRING,
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            hotelID: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Hotels',
                    key: 'id'
                }
            },
            prices: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.STRING
            },
            adultCount: {
                type: Sequelize.STRING
            },
            childrenCount: {
                type: Sequelize.STRING
            },
            occupationStar: {
                type: Sequelize.STRING
            },
            occupationEnd: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Rooms');
    }
};