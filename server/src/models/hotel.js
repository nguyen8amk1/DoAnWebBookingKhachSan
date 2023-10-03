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
                onDelete: 'CASCADE'
            });
            Hotel.belongsTo(models.City, {
                foreignKey: {
                    allowNull: false
                },
                onDelete: 'CASCADE',
            })
        }
    }
    Hotel.init({
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        description: DataTypes.STRING,
        images: DataTypes.STRING,
        score: DataTypes.STRING,
        review: DataTypes.STRING,
        // cityID: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Hotel',
    });
    return Hotel;
};