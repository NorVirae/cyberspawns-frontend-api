const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("spawnSkills", {
    id: {type:DataTypes.UUID}, 
    spawnId: {type:DataTypes.UUID}, 
    parentX: {type:DataTypes.UUID}, 
    parentY: {type:DataTypes.UUID}, 

   

},
{tableName:"spawnSkills"},
{timestamps:true}
)