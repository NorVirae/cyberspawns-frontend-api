const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("skills", {
    id: {type:DataTypes.INTEGER}, 
    imageAddress: {type:DataTypes.INTEGER}, 
    metaDataAddress: {type:DataTypes.INTEGER}, 
    speed: {type:DataTypes.INTEGER, defaultValue:4}, 

},
{tableName:"stats"},
{timestamps:true}
)