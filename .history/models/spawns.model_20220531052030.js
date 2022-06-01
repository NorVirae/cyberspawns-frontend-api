const { DataTypes} = require('sequelize')
const sequelize = require('../db/db')
const { getTimeStamp } = require('../functions')

// console.log(sequelize)
module.exports = sequelize.define('spawns', {
    id:{type:DataTypes.UUID, primaryKey:true, defaultValue:DataTypes.UUIDV4},
    owner_id:{type:DataTypes.UUID},
    birthdate:{type:DataTypes.DOUBLE, defaultValue: getTimeStamp()},
    chain:{type: DataTypes.STRING},
    class:{type:DataTypes.STRING},
    name:{type:DataTypes.STRING},
    breedcount:{type:DataTypes.INTEGER},
    figures:{type:DataTypes.STRING},
    createdAt: {type:DataTypes.DOUBLE, defaultValue: getTimeStamp()},
    updated_at: {type:DataTypes.DOUBLE, defaultValue: getTimeStamp()},
    token_id:{type: DataTypes.BIGINT},
    price:{type: DataTypes.REAL},
   
    
},
{tableName:'spawns'},
{timestamps:false}
)
