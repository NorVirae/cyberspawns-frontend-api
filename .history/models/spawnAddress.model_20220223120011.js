const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("spawnSkills", {
    spawnId: {type:DataTypes.UUID}, 
    meta: {type:DataTypes.UUID}, 
    skill2: {type:DataTypes.UUID}, 
    skill3: {type:DataTypes.UUID}, 

   

},
{tableName:"spawnSkills"},
{timestamps:true}
)