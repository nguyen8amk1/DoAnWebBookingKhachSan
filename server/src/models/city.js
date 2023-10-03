'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class City extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // City.hasMany(models.Hotel, { foreignKey: 'cityID', as: 'cityData' })
            console.log(models.Hotel)
            City.hasMany(models.Hotel, {
                onDelete: 'CASCADE'
            })
        }
    }
    City.init({
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'City',
    });
    return City;
};