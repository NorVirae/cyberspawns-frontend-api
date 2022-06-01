const { DataTypes } = require("sequelize")
const sequelize = require("../db/db")


module.exports = sequelize.define("spawn_addresses", {
    spawn_id: {type:DataTypes.UUID, primaryKey:true, unique:true},
    metadata: {type:DataTypes.STRING},
    image_atlas: {type:DataTypes.STRING},
    atlas: {type:DataTypes.STRING},
},
{tableName:"spawn_addresses"},
{timestamps:true}
)