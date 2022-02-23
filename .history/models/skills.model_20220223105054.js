const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("skills", {
    id: {type:DataTypes.INTEGER}, 
    image: {type:DataTypes.INTEGER}, 
    health: {type:DataTypes.INTEGER}, 
    speed: {type:DataTypes.INTEGER, defaultValue:4}, 

},
{tableName:"stats"},
{timestamps:true}
)