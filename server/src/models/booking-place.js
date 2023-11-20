'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class BookingPlace extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // BookingPlace.hasMany(models.Hotel, { foreignKey: 'BookingPlaceID', as: 'BookingPlaceData' })         
            BookingPlace.hasOne(models.User, {
                foreignKey: 'userID'
            });
            BookingPlace.hasOne(models.Room, {
                foreignKey: 'roomID'
            });
            BookingPlace.hasOne(models.Hotel, {
                foreignKey: 'hotelID'
            });
        }
    }
    BookingPlace.init({
        price: DataTypes.FLOAT,
        dateRange: DataTypes.STRING,
        userID: DataTypes.INTEGER,
        roomID: DataTypes.INTEGER,
        hotelID: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'BookingPlace',
    });
    return BookingPlace;
};