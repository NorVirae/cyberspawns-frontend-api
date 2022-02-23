const { DataTypes} = require('sequelize')
const sequelize = require('../db/db')
const { getTimeStamp } = require('../functions')

// console.log(sequelize)
module.exports = sequelize.define('spawns', {
    id:{type:DataTypes.UUID},
    ownerid:{type:DataTypes.UUID},
    birthdate:{type:DataTypes.DOUBLE, defaultValue:getTimeStamp()},
    chain:{type: DataTypes.STRING},
    class:{type:DataTypes.STRING},
    name:{type:DataTypes.STRING},
    breedcount:{type:DataTypes.INTEGER},
    figures:{type:DataTypes.STRING},
    createdAt: {type:DataTypes.DOUBLE, defaultValue:getTimeStamp()},
    updatedAt: {type:DataTypes.DOUBLE, defaultValue:getTimeStamp()},
    tokenId:{type: DataTypes.BIGINT},
    parentId:{type: DataTypes.ARRAY(DataTypes.BIGINT)},
    price:{type: DataTypes.REAL},
    spawnAddressesId:{type:DataTypes.BIGINT},
    battleInfoId:{type:DataTypes.BIGINT},
    spawnPartsId:{type: DataTypes.ARRAY(DataTypes.BIGINT)},
    
},
{tableName:'spawns'},
{timestamps:false}
)
