const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("battleInfo", {
    spawnId: {type:DataTypes.UUID}, 
    level: {type:DataTypes.INTEGER}, 
    health: {type:DataTypes.INTEGER}, 
    speed: {type:DataTypes.INTEGER, defaultValue:4}, 

},
{tableName:"battleInfo"},
{timestamps:true}
)