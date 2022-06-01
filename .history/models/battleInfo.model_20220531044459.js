const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("battle_info", {
    spawn_id: {type:DataTypes.UUID, primaryKey:true},
    level: {type:DataTypes.INTEGER},
    battles_won: {type:DataTypes.BIGINT},
    battlesLost: {type:DataTypes.BIGINT},

},
{tableName:"battle_info"},
{timestamps:true}
)