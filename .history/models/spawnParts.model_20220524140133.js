const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("spawn_parts", {
    id: {type:DataTypes.UUID, primaryKey:true}, 
    name: {type:DataTypes.STRING}, 
    imageAddress: {type:DataTypes.STRING}, 
    class: {type:DataTypes.STRING}, 
    level: {type:DataTypes.INTEGER},
},
{tableName:"spawn_parts"},
{timestamps:true}
)