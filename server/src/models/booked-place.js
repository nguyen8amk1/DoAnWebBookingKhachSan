'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class BookedPlace extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // BookedPlace.hasMany(models.Hotel, { foreignKey: 'BookedPlaceID', as: 'BookedPlaceData' })         
            BookedPlace.hasOne(models.User, {
                foreignKey: 'userID'
            });
            BookedPlace.hasOne(models.Room, {
                foreignKey: 'roomID'
            });
            BookedPlace.hasOne(models.Hotel, {
                foreignKey: 'hotelID'
            });
        }
    }
    BookedPlace.init({
        price: DataTypes.STRING,
        dateRange: DataTypes.STRING,
        userID: DataTypes.INTEGER,
        roomID: DataTypes.INTEGER,
        hotelID: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'BookedPlace',
    });
    return BookedPlace;
};