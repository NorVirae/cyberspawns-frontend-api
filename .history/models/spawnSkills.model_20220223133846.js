const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("spawnSkills", {
    id:{type:DataTypes.BIGINT, primaryKey:true}
    spawnId: {type:DataTypes.UUID}, 
    skill1: {type:DataTypes.UUID}, 
    skill2: {type:DataTypes.UUID}, 
    skill3: {type:DataTypes.UUID}, 
},
{tableName:"spawnSkills"},
{timestamps:true}
)