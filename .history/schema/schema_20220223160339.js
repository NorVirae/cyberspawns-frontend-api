const graphql = require('graphql')
const Pool = require('../db/db');
const {Sequelize, DataTypes, where} = require('sequelize');
const db = require('../db/db');
const spawnsModel = require('../models/spawns.model');
const { getTimeStamp } = require('../functions');
const spawnSkillsModel = require('../models/spawnSkills.model');
const spawnPartsModel = require('../models/spawnParts.model');
const spawnParentsModel = require('../models/spawnParents.model');
const battleInfoModel = require('../models/battleInfo.model');
require('dotenv').config()



const Spawns = spawnsModel
const SpawnsSkills = spawnSkillsModel
const SpawnParts = spawnPartsModel
const SpawnsParents = spawnParentsModel
const battleInfo = battleInfoModel
const sequelize = db

const innitiateConstraints = () => {
    try{
        // Parts
        Spawns.hasOne(SpawnParts, {foreignKey:"id"})
        SpawnParts.belongsTo(Spawns, {foreignKey:"id"})
        // parents
        Spawns.hasOne(SpawnsParents, {foreignKey:"spawnId"})
        SpawnsParents.belongsTo(Spawns, {foreignKey:"spawnId"})

    }catch(err){
        throw new Error("FROM INNITIATE CONSTRAINTS: ",err)
    }
}
const {GraphQLObjectType,GraphQLSchema, GraphQLFloat, GraphQLInt, GraphQLID, GraphQLBoolean, GraphQLList, GraphQLString} = graphql

console.log(DataTypes.NOW)
const restructureResult = (Arr) => {
    try{
        let newDats = []
        Arr.map(eachData=>{
            newDats.push(eachData.dataValues)
        })

        return newDats
    } catch(err){
        throw new Error(err)
    }
}


const SyncDb = (tabList)=>{
    try{
        tabList.map(tabs => {
            tabs.sync({force:false})
        })
    }catch(err){
        throw new Error(err)
    }
    
}

const checkConnection = () =>{
    sequelize.authenticate().then(res => {
        console.log(process.env.NODE_ENV)
        console.log("Database connection was successful!")
    }).catch(err =>{
        console.log("Database connection Failed", err)
    })
}

try{
    checkConnection()
    SyncDb([Spawns, SpawnsSkills, SpawnParts, SpawnsParents, battleInfo])
    innitiateConstraints()
}catch(err){
    console.log(err)
}


const UserType = new GraphQLObjectType({
    name:"User",
    fields: () =>({
            id:{type:GraphQLID},
            username:{type:GraphQLString},
            email:{type:GraphQLString},
            password:{type: GraphQLString},
            role:{type:GraphQLString},
            image:{type:GraphQLString},
            isVerified:{type:GraphQLBoolean},
            
    })
})

const spawnSkillType = new GraphQLObjectType({
    name:"SpawnSkill",
    fields: () =>({
            id:{type:GraphQLInt},
            spawnId:{type:GraphQLID},
            skill1:{type:GraphQLID},
            skill2:{type: GraphQLID},
            skill3:{type:GraphQLID},  
    })
})

const spawnAddressType = new GraphQLObjectType({
    name:"SpawnAddress",
    fields: () =>({
            spawnId:{type:GraphQLID},
            metadata:{type:GraphQLString},
            imageAtlas:{type: GraphQLString},
            atlas:{type:GraphQLString},  
    })
})

const skillType = new GraphQLObjectType({
    name:"Skill",
    fields: () =>({
            spawnId:{type:GraphQLID},
            metadata:{type:GraphQLString},
            imageAtlas:{type: GraphQLString},
            atlas:{type:GraphQLString},  
    })
})

const SpawnType = new GraphQLObjectType({
    name:"Spawn",
    fields: () =>({
            id:{type:GraphQLString},
            ownerid:{type:GraphQLInt},
            birthdate:{type:GraphQLInt},
            chain:{type: GraphQLString},
            class:{type:GraphQLString},
            name:{type:GraphQLString},
            breedcount:{type:GraphQLInt},
            figures:{type:GraphQLString},
            createdAt:{type:GraphQLInt},
            updatedAt:{type:GraphQLInt},
            tokenId:{type:GraphQLInt},
            price:{type:GraphQLFloat},
            children:{type:new GraphQLList(SpawnType),
                async resolve(parent){
                    try{
                        
                        let listedChildren = await Spawns.findAll({
                            where:{id:parent.id}
                        })
                        return restructureResult(listedChildren)
                    }
                    catch(err){
                        return []
                    }
                }},

            parents:{type:new GraphQLList(SpawnType),
                    async resolve(parent){
                        try{
                            let spawnParents = await SpawnsParents.findOne({
                                where:{spawnId:parent.id}
                            })
                            let listedParent = await Spawns.findAll({
                                where:{id:[spawnParents.parentX, spawnParents.parentY]}
                            })
                            return restructureResult(listedParent)
                        }
                        catch(err){
                            return []
                        }
                    }},
            deleteCount:{type:GraphQLInt}
    })
})




const RootQueryType = new GraphQLObjectType({
    name:"RootQuery",
    fields: {
        spawns:{
            type:new GraphQLList(SpawnType),
            async resolve(parents){
                try{
                    const newSpawn = await Spawns.findAll()

                    return restructureResult(newSpawn)
                }
                catch(err){
                    throw new console.error(err);
                }
               
            }

        },

        spawn:{
            type:SpawnType,
            args:{id:{type:GraphQLInt}},
            async resolve(parents, args){
                try{
                const oneSpawn = await Spawns.findOne({
                    where:{id:args.id}
                })
                return oneSpawn?oneSpawn.dataValues:{}
            }

            catch(err){
                throw new console.error(err);
                }
            }

        },

        users:{
            type:new GraphQLList(UserType),
            resolve(parents){
                return "Spawns.find()"
            }

        },

        user:{
            type:SpawnType,
            args:{id:{type:GraphQLID}},
            resolve(parents, args){
                return "Spawns.findById(args.id)"
            }

        }
    }
})

const Mutation = new GraphQLObjectType({
    name:"Mutation", 
    fields:{
        createSpawn:{
            type:SpawnType,
            args:{id:{type:GraphQLInt},
            ownerid:{type:GraphQLID},
            chain:{type: GraphQLString},
            children:{type: new GraphQLList(GraphQLInt)},
            parents:{type: new GraphQLList(GraphQLInt)},
            level:{type:GraphQLInt},
            price:{type:GraphQLFloat},
            priceCrypto:{type:GraphQLFloat},
            class:{type:GraphQLString},
            name:{type:GraphQLString},
            parts:{type:new GraphQLList(GraphQLString)},
            image:{type:GraphQLString},
            statsid:{type:GraphQLInt},
            speed:{type:GraphQLInt},
            skill:{type:GraphQLInt},
            health:{type:GraphQLInt},
            morale:{type:GraphQLInt},
            breedcount:{type:GraphQLInt},

        },

        async resolve(parent, args){
            try {
                console.log("LOOK HERE")
                const stats = {speed:args.speed, health:args.health, morale:args.morale, skill:args.skill}
                const newStats = await  Stats.create({
                    morale:args.morale,
                    skill:args.skill,
                    health:args.health,
                    speed:args.speed
                })
                
                args.statsid = newStats.dataValues.id
                console.log(args)
                try{
                    const newSpawn = await Spawns.create(args)
                    return newSpawn.dataValues
                }catch(err){
                    console.log(err)
                }
                 console.log(newSpawn)

                

            }
            catch(err){
                return err
            }
           
        }
     },

     spawn:{
        type:SpawnType,
        args:{id:{type:GraphQLInt}},
        async resolve(parents, args){
            try{
            const oneSpawn = await Spawns.findOne({
                where:{id:args.id}
            })
            return oneSpawn?oneSpawn.dataValues:{}
            }

            catch(err){
                throw new console.error(err);
                }
        }

    },

     editSpawn:{
         type:SpawnType,
         args:{id:{type:GraphQLInt},
         ownerid:{type:GraphQLID},
         chain:{type: GraphQLString},
         children:{type: new GraphQLList(GraphQLInt)},
         parents:{type: new GraphQLList(GraphQLInt)},
         level:{type:GraphQLInt},
         class:{type:GraphQLString},
         price:{type:GraphQLFloat},
         priceCrypto:{type:GraphQLFloat},
         name:{type:GraphQLString},
         parts:{type:new GraphQLList(GraphQLString)},
         image:{type:GraphQLString},
         statsid:{type:GraphQLInt},
         speed:{type:GraphQLInt},
         skill:{type:GraphQLInt},
         health:{type:GraphQLInt},
         morale:{type:GraphQLInt},
         breedcount:{type:GraphQLInt},

        
        },
         async resolve(parent, args){
             try{
                    let editedSpawn = await Spawns.update(args,{
                        where:{id:args.id},
                        returning:true
                })

                    let resultedSpawn = await Spawns.findOne({
                        where:{id:args.id}
                })

                    
                }
            catch(err){
                    throw new console.error(err);
                    return {}
            }
        }
     },

     deleteSpawn:{
        type:SpawnType,
        args:{id:{type:GraphQLInt},
       },
       async resolve(parent, args){
           try{
                const fetchOne = await Spawns.findOne({
                    where:{id:args.id}
                })
                const statId = fetchOne.dataValues.statsid

                const deletedSpawn = await Spawns.destroy({
                    where:{id:args.id}
                })

                const deleteStats = await Stats.destroy({
                    where:{id:statId}
                })
            return fetchOne.dataValues
            }
       
       catch(err){
        throw new console.error(err);
        return {}
            }
        }
    },

      deleteAllSpawns:{
        type:SpawnType,
       
       async resolve(parent, args){
           
           return "deletedSpawn"
        }
      },


    //   User mutation

    createUser:{
        type:UserType,
        args:{id:{type:GraphQLID},
        name:{type:GraphQLString},
        image:{type:GraphQLString},
        parents:{type: new GraphQLList(GraphQLID)},
        price:{type:GraphQLFloat},
        priceCrypto:{type:GraphQLFloat},
        health:{type:GraphQLInt},
        speed:{type:GraphQLInt},
        color:{type:GraphQLString},
        skill:{type:GraphQLInt},
        breedCount:{type:GraphQLInt},
        morale:{type:GraphQLInt},
        class:{type:GraphQLString},

        subClass:{type:GraphQLString},

    },
    resolve(parent, args){
        // let newSpawn = new Spawns(
        //     args
        // )

        return "newSpawn.save()"
    }
 },

 editUser:{
     type: UserType,
     args:{id:{type:GraphQLID},
        name:{type:GraphQLString},
        image:{type:GraphQLString},
        parents:{type: new GraphQLList(GraphQLID)},
        price:{type:GraphQLFloat},
        priceCrypto:{type:GraphQLFloat},
        health:{type:GraphQLInt},
        speed:{type:GraphQLInt},
        skill:{type:GraphQLInt},
        morale:{type:GraphQLInt},
        color:{type:GraphQLString},
        breedCount:{type:GraphQLInt},
        class:{type:GraphQLString},
        subClass:{type:GraphQLString},

    
    },
     resolve(parent, args){
        //  let editedSpawn = Spawns.findOneAndUpdate({_id:args.id},args, {new:true})
        return "editedSpawn"
     }
 },

 deleteUser:{
    type:UserType,
    args:{id:{type:GraphQLID},
   },
   async resolve(parent, args){
        
       return "deletedSpawn"
    }
  },

  deleteAllUsers:{
    type:UserType,
   
   async resolve(parent, args){
        
       return "deletedSpawn"
    }
  },

  user:{
    type:SpawnType,
    args:{id:{type:GraphQLID}},
    resolve(parents, args){
        return "Spawns.findById(args.id)"
            }
        },
    }
})


module.exports = new GraphQLSchema({
    query:RootQueryType,
    mutation:Mutation
})

