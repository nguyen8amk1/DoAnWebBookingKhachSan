'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('BookingPlaces', {
            // name: DataTypes.STRING,
            // address: DataTypes.STRING,
            // description: DataTypes.STRING,
            // images: DataTypes.STRING,
            // score: DataTypes.STRING,
            // review: DataTypes.STRING,
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
            userID: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            roomID: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Rooms',
                    key: 'id'
                }
            },
            price: {
                type: Sequelize.STRING
            },
            dateRange: {
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
        await queryInterface.dropTable('BookingPlaces');
    }
};