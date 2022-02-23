const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("spawnSkills", {
    spawnId: {type:DataTypes.UUID}, 
    metadata: {type:DataTypes.UUID}, 
    imageAtlas: {type:DataTypes.UUID}, 
    atlas: {type:DataTypes.UUID}, 

   

},
{tableName:"spawnSkills"},
{timestamps:true}
)