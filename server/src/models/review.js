'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Review extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // City.hasMany(models.Hotel, { foreignKey: 'cityID', as: 'cityData' })         
            // City.hasMany(models.Hotel, {
            //     foreignKey: 'cityID'
            // })
        }
    }

    Review.init({
        place_id: DataTypes.STRING,
        reviewer_id: DataTypes.STRING,
        content: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Review',
    });
    return Review;
};