const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("skills", {
    id: {type:DataTypes.UUID}, 
    imageAddress: {type:DataTypes.VARC}, 
    metaDataAddress: {type:DataTypes.INTEGER}, 
   

},
{tableName:"stats"},
{timestamps:true}
)