const { DataTypes} = require('sequelize')
const sequelize = require('../db/db')
const { getTimeStamp } = require('../functions')

// console.log(sequelize)
module.exports = sequelize.define('spawns', {
    id:{type:DataTypes.UUID, primaryKey:true, defaultValue:DataTypes.UUIDV4},
    ownerid:{type:DataTypes.UUID},
    birthdate:{type:DataTypes.DOUBLE, defaultValue: getTimeStamp()},
    chain:{type: DataTypes.STRING},
    class:{type:DataTypes.STRING},
    name:{type:DataTypes.STRING},
    breedcount:{type:DataTypes.INTEGER},
    figures:{type:DataTypes.STRING},
    created_a: {type:DataTypes.DOUBLE, defaultValue: getTimeStamp()},
    updatedAt: {type:DataTypes.DOUBLE, defaultValue: getTimeStamp()},
    token_id:{type: DataTypes.BIGINT},
    price:{type: DataTypes.REAL},
   
    
},
{tableName:'spawns'},
{timestamps:false}
)
