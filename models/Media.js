const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Media = sequelize.define('Media', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        image : {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            //using field cause we need to reference the underscore cause in object we cant use it
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            //using field cause we need to reference the underscore cause in object we cant use it
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false
        }
    },{
        tableName: 'media'
    });

    return Media
}