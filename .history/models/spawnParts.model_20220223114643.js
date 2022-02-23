const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("spawnParts", {
    id: {type:DataTypes.UUID}, 
    name: {type:DataTypes.STRING}, 
    metaDataAddress: {type:DataTypes.STRING}, 
   

},
{tableName:"skills"},
{timestamps:true}
)