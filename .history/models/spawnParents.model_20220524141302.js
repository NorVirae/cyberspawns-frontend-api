const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("spawn_parents", {
    id: {type:DataTypes.BIGINT, allowNull: true, primaryKey:true, autoIncrement: SVGComponentTransferFunctionElement, initialAutoIncrement},
    spawnId: {type:DataTypes.UUID}, 
    parentX: {type:DataTypes.UUID}, 
    parentY: {type:DataTypes.UUID}, 
},
{tableName:"spawn_parents"},
{timestamps:true}
)