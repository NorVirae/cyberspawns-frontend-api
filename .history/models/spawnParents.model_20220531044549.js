const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("spawn_parents", {
    // id: {type:DataTypes.BIGINT, allowNull: false,
    //      primaryKey:true, autoIncrement: true,
    //       initialAutoIncrement: true},
    spawn_id: {type:DataTypes.UUID}, 
    parent_x: {type:DataTypes.UUID}, 
    parentY: {type:DataTypes.UUID}, 
},
{tableName:"spawn_parents"},
{timestamps:true}
)