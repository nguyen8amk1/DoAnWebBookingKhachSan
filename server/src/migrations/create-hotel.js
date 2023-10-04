'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Hotels', {
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
            cityID: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Cities',
                    key: 'id'
                }
            },
            name: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            images: {
                type: Sequelize.STRING
            },
            score: {
                type: Sequelize.STRING
            },
            review: {
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
        await queryInterface.dropTable('Hotels');
    }
};