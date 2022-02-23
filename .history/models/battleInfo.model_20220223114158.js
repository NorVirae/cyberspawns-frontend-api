const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("battleInfo", {
    spawnId: {type:DataTypes.UUID}, 
    level: {type:DataTypes.INTEGER}, 
    battles: {type:DataTypes.BIGINT}, 
    speed: {type:DataTypes.BIGINT}, 

},
{tableName:"battleInfo"},
{timestamps:true}
)