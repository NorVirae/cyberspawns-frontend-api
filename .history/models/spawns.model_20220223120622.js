const { DataTypes} = require('sequelize')
const sequelize = require('../db/db')
const { getTimeStamp } = require('../functions')

// console.log(sequelize)
module.exports = sequelize.define('spawns', {
    id:{type:DataTypes.UUID},
    ownerid:{type:DataTypes.UUID},
    birthdate:{type:DataTypes.DOUBLE, defaultValue:getTimeStamp()},
    class:{type:DataTypes.STRING},
    chain:{type: DataTypes.STRING},
    price:{type: DataTypes.REAL},
    parents:{type: DataTypes.ARRAY(DataTypes.INTEGER)},
    name:{type:DataTypes.STRING},
    parts:{type: DataTypes.ARRAY(DataTypes.STRING)},
    image:{type:DataTypes.STRING},
    statsid:{type:DataTypes.INTEGER},
    createdAt: {type:DataTypes.DOUBLE, defaultValue:getTimeStamp()},
    updatedAt: {type:DataTypes.DOUBLE, defaultValue:getTimeStamp()},
    speed:{type:DataTypes.INTEGER},
    skill:{type:DataTypes.INTEGER},
    health:{type:DataTypes.INTEGER},
    morale:{type:DataTypes.INTEGER},
    breedcount:{type:DataTypes.INTEGER},
    
},
{tableName:'spawns'},
{timestamps:false}
)
