const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("skills", {
    id: {type:DataTypes.UUID, primaryKey:true},
    image_address: {type:DataTypes.STRING},
    meta_dataAddress: {type:DataTypes.STRING},
},
{tableName:"skills"},
{timestamps:true}
)