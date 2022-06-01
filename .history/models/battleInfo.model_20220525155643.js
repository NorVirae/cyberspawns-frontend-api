const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("battle_info", {
    spawnId: {type:DataTypes.UUID, primaryKey:true}, 
    level: {type:DataTypes.INTEGER},
    battlesWon: {type:DataTypes.BIGINT},
    battlesLost: {type:DataTypes.BIGINT},

},
{tableName:"battle_info"},
{timestamps:true}
)