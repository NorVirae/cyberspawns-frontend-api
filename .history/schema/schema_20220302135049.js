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
const spawnAddressModel = require('../models/spawnAddress.model');
const skillsModel = require('../models/skills.model');
require('dotenv').config()



const Spawns = spawnsModel
const SpawnSkills = spawnSkillsModel
const SpawnAddress = spawnAddressModel
const SpawnParts = spawnPartsModel
const SpawnsParents = spawnParentsModel
const BattleInfo = battleInfoModel
const Skill = skillsModel
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
const {GraphQLObjectType, GraphQLSchema, GraphQLFloat, GraphQLInt, GraphQLID, GraphQLBoolean, GraphQLList, GraphQLString} = graphql

// Author:  Frank
// Restructure Result
// is a function that processes data returned by sequelize so its graphql friendly
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
    SyncDb([Spawns, SpawnSkills, Skill, SpawnParts, SpawnsParents, BattleInfo, SpawnAddress])
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
            isActive:{type:GraphQLBoolean},
            image:{type:GraphQLString},
            isVerified:{type:GraphQLBoolean},
            
    })
})

const SpawnSkillType = new GraphQLObjectType({
    name:"SpawnSkill",
    fields: () =>({
            id:{type:GraphQLInt},
            spawnId:{type:GraphQLID},
            skill1:{type:GraphQLID},
            skill2:{type: GraphQLID},
            skill3:{type:GraphQLID},  
    })
})

const SpawnAddressType = new GraphQLObjectType({
    name:"SpawnAddress",
    fields: () =>({
            spawnId:{type:GraphQLID},
            metadata:{type:GraphQLString},
            imageAtlas:{type: GraphQLString},
            atlas:{type:GraphQLString},  
    })
})

const SkillsType = new GraphQLObjectType({
    name:"Skills",
    fields: () =>({
            id:{type:GraphQLID},
            imageAddress:{type:GraphQLString},
            metaDataAddress:{type: GraphQLString},
    })
})

const SpawnPartsType = new GraphQLObjectType({
    name:"SpawnParts",
    fields: () =>({
            id:{type:GraphQLID},
            name:{type:GraphQLString},
            imageAddress:{type: GraphQLString},
            class:{type: GraphQLString},
            level:{type: GraphQLInt},

    })
})


const BattleInfoType = new GraphQLObjectType({
    name:"BattleInfoType",
    fields: () =>({
            spawnId:{type:GraphQLID},
            level:{type: GraphQLInt},
            battlesWon:{type: GraphQLInt},
            level:{type: GraphQLInt},

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
            battleInfo:{type:BattleInfoType,
                async resolve (parent) {
                    try{
                        const fetchBattleInfo = await BattleInfo.findOne({
                            where:{spawnId:parent.id}
                        })
                        return fetchBattleInfo.dataValues
                }catch(err){
                    throw new Error(err)
                }
              }
            },

            spawnSkills:{type:new GraphQLList(SkillsType),
                async resolve (parent) {
                    try{
                        const fetchSpawnSkills = await SpawnSkills.findOne({
                            where:{spawnId:parent.id}
                        })
                        const skillsObj = fetchSpawnSkills.dataValues

                        const spawnSkillCollection = await Skill.findAll({
                            where:{id:[skillsObj.skill1, skillsObj.skill2, skillsObj.skill3]}
                        })
                        return restructureResult(spawnSkillCollection)
                }catch(err){
                    throw new Error("TRACEBACK spawnskills: "+err)
                }
              } 
            },

            spawnAddress:{type: SpawnAddressType,
                async resolve (parent) {
                    try{
                        const fetchSpawnAddress = await SpawnAddress.findOne({
                            where:{spawnId:parent.id}
                        })
                        return fetchSpawnAddress.dataValues
                }catch(err){
                    throw new Error("TRACEBACK spawnskills: "+err)
                }
              } 
            },

            spawnParts:{type: SpawnPartsType,
                async resolve (parent) {
                    try{
                        const fetchSpawnParts = await SpawnParts.findOne({
                            where:{spawnId:parent.id}
                        })
                        return fetchSpawnParts.dataValues
                }catch(err){
                    throw new Error("TRACEBACK spawnskills: "+err)
                }
              } 
            },


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
            args:{
            // ~ main spawn section ~
            id:{type:GraphQLInt},
            ownerId:{type:GraphQLID},
            chain:{type: GraphQLString},
            class:{type:GraphQLString},
            name:{type:GraphQLString},
            breedcount:{type:GraphQLInt},
            figures:{type:GraphQLString},
            tokenId:{type:GraphQLInt},
            price:{type:GraphQLFloat},
            parents:{type: new GraphQLList(GraphQLInt)},
            breedcount:{type:GraphQLInt},
            // ~ main spawn section ~

            // ~ battle info ~
            spawnId:{type:GraphQLID},
            battleLevel:{type:GraphQLInt},
            battlesWon:{type:GraphQLInt},
            // ~ battle info ~

            // ~ spawn parts ~
            partsName:{type:GraphQLString},
            imageAddress:{type:GraphQLString},
            partsClass:{type:GraphQLString},
            partsLevel:{type:GraphQLString},
            //  ~ spawn parts ~

            // ~ skills ~
            skillImageAddress:{type:GraphQLString},
            skillMetaDataAddress:{type:GraphQLString},
            // ~ skills ~

            // ~ spawn address ~
            SAspawnId:{type:GraphQLID},
            metadata:{type:GraphQLString},
            imageAtlas:{type:GraphQLString},
            atlas:{type:GraphQLString},                                               
        },

        async resolve(parent, args){
            console.log(args)
            const spawn
            try {
                const newSpawn = await Spawns.create({
                    ownerid:args.ownerId,
                    chain:args.chain,
                    class:args.class,
                    name:args.name,
                    breedcount:args.breedcount,
                    figures:args.figures,
                    tokenId:args.tokenId,
                    price:args.price,
                })
                return newSpawn.dataValues
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

