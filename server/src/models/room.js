'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Room extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Room.belongsTo(models.Hotel, {
                foreignKey: 'hotelID'
            })
        }
    }
    Room.init({
        prices: DataTypes.STRING,
        status: DataTypes.STRING,
        adultCount: DataTypes.STRING,
        childrenCount: DataTypes.STRING,
        occupationStar: DataTypes.STRING,
        occupationEnd: DataTypes.STRING,
        // hotelID: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Room',
    });
    return Room;
};