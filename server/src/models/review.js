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
            Review.belongsTo(models.User, {
                foreignKey: 'userID'
            });
            Review.belongsTo(models.Hotel, {
                foreignKey: 'hotelID'
            });
        }
    }

    Review.init({
        hotelID: DataTypes.INTEGER,
        userID: DataTypes.INTEGER,
        content: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Review',
    });
    return Review;
};