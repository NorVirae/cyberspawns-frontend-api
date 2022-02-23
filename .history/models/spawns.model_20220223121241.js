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
    figures:{type:DataTypes.INTEGER},
    createdAt: {type:DataTypes.DOUBLE, defaultValue:getTimeStamp()},
    updatedAt: {type:DataTypes.DOUBLE, defaultValue:getTimeStamp()},
    tokenId:{type: DataTypes.STRING},
    price:{type: DataTypes.REAL},
    parentId:{type: DataTypes.ARRAY(DataTypes.BIGINT)},
    spawnAddressesId:{type: DataTypes.ARRAY(DataTypes.BIGINT)},
    battleInfoId:{type: DataTypes.ARRAY(DataTypes.BIGINT)},
    parts:{type: DataTypes.ARRAY(DataTypes.STRING)},
    image:{type:DataTypes.STRING},
    statsid:{type:DataTypes.INTEGER},
    speed:{type:DataTypes.INTEGER},
    skill:{type:DataTypes.INTEGER},
    health:{type:DataTypes.INTEGER},
    morale:{type:DataTypes.INTEGER},
    
},
{tableName:'spawns'},
{timestamps:false}
)
