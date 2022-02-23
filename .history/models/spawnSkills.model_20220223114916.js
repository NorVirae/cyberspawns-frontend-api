const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("spawn", {
    id: {type:DataTypes.UUID}, 
    imageAddress: {type:DataTypes.STRING}, 
    metaDataAddress: {type:DataTypes.STRING}, 
   

},
{tableName:"skills"},
{timestamps:true}
)