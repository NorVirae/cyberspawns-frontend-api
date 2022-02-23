const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("spawnParts", {
    id: {type:DataTypes.UUID}, 
    name: {type:DataTypes.S}, 
    imageAddress: {type:DataTypes.STRING}, 
    class: {type:DataTypes.STRING}, 
    level: {type:DataTypes.STRING}, 

   

},
{tableName:"skills"},
{timestamps:true}
)