'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Hotel extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // Hotel.BelongsTo(models.City, { foreignKey: 'cityID' })
            Hotel.hasMany(models.Room, {
                foreignKey: 'hotelID'
            });
            Hotel.belongsTo(models.City, {
                foreignKey: 'cityID'
            });
            Hotel.hasMany(models.Image, {
                foreignKey: 'hotelID'
            });
            Hotel.hasMany(models.Review, {
                foreignKey: 'hotelID'
            });
            Hotel.belongsTo(models.BookingPlace, {
                foreignKey: 'hotelID'
            });
        }
    }

    Hotel.init({
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        description: DataTypes.STRING,
        score: DataTypes.STRING,
        cityID: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Hotel',
    });
    return Hotel;
};
