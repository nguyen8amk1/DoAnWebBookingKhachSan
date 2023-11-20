'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Image extends Model {
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
            Image.belongsTo(models.Hotel, {
                foreignKey: 'hotelID'
            })
        }
    }

    Image.init({
        hotelID: DataTypes.INTEGER,
        link: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Image',
    });
    return Image;
};