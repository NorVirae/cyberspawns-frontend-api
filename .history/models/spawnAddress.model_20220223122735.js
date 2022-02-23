const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("spawnAddresses", {
    spawnId: {type:DataTypes.UUID}, 
    metadata: {type:DataTypes.STRING}, 
    imageAtlas: {type:DataTypes.UUID}, 
    atlas: {type:DataTypes.UUID}, 

   

},
{tableName:"spawnSkills"},
{timestamps:true}
)