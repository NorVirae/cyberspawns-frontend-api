const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("spawnAddresses", {
    spawnId: {type:DataTypes.UUID, primaryKey:true}, 
    metadata: {type:DataTypes.STRING}, 
    imageAtlas: {type:DataTypes.STRING}, 
    atlas: {type:DataTypes.STRING}, 

   

},
{tableName:"spawnSkills"},
{timestamps:true}
)