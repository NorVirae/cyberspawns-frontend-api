const { DataTypes} = require('sequelize')
const sequelize = require('../db/db')
const { getTimeStamp } = require('../functions')

// console.log(sequelize)
module.exports = sequelize.define('spawns',
    id
    ownerid:{type:DataTypes.UUID},
    birthdate:{type:DataTypes.DOUBLE, defaultValue:getTimeStamp()},
    chain:{type: DataTypes.STRING},
    price:{type: DataTypes.REAL},
    priceCrypto:{type: DataTypes.REAL},
    parents:{type: DataTypes.ARRAY(DataTypes.INTEGER)},
    children:{type: DataTypes.ARRAY(DataTypes.INTEGER)},
    level:{type:DataTypes.INTEGER},
    class:{type:DataTypes.STRING},
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
