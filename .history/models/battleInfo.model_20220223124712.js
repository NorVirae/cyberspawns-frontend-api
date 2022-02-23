const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("battleInfo", {
    spawnId: {type:DataTypes.UUID, primaryKey:true}, 
    level: {type:DataTypes.INTEGER}, 
    battlesWon: {type:DataTypes.BIGINT}, 
    battlesLost: {type:DataTypes.BIGINT}, 

},
{tableName:"battleInfo"},
{timestamps:true}
)