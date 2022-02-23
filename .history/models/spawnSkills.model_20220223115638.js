const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("spawnSkills", {
    spawnId: {type:DataTypes.UUID}, 
    skill1: {type:DataTypes.STRING}, 
    metaDataAddress: {type:DataTypes.STRING}, 
    metaDataAddress: {type:DataTypes.STRING}, 

   

},
{tableName:"skills"},
{timestamps:true}
)