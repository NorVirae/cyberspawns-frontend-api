const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("skills", {
    id: {type:DataTypes.U}, 
    imageAddress: {type:DataTypes.INTEGER}, 
    metaDataAddress: {type:DataTypes.INTEGER}, 
   

},
{tableName:"stats"},
{timestamps:true}
)