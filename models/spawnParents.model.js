const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("spawnParents", {
    id: {type:DataTypes.BIGINT, primaryKey:true}, 
    spawnId: {type:DataTypes.UUID}, 
    parentX: {type:DataTypes.UUID}, 
    parentY: {type:DataTypes.UUID}, 

},
{tableName:"spawnParents"},
{timestamps:true}
)