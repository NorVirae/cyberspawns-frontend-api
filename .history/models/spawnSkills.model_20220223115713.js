const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("spawnSkills", {
    spawnId: {type:DataTypes.UUID}, 
    skill1: {type:DataTypes.STRING}, 
    skill2: {type:DataTypes.STRING}, 
    skill3: {type:DataTypes.STRING}, 

   

},
{tableName:"spawnSkills"},
{timestamps:true}
)