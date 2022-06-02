const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const resolvers =  {
        Query: {
           fetchSpawn: async () => {
               return {name: "hello"}
           },
           fetchMarketPlaceSpawns: async () => {
               const listOfSpawns = await prisma.spawn.u({
                   
               })
                return []
           }
        },

        Mutation: {
            createSpawn: async (parents, args, context) => {

                const newSpawn = await prisma.spawn.create({
                    data: {
                        owner_id: "9f7f12de-850b-4f83-94f2-2f350ff77b01",
                        chain: "0xa332bFdad3FC98abB965Ebc54EBfF593D246dD0D",
                        class: "ave",
                        name: "oga",
                        breed_count: 20,
                        figures: "20",
                        token_id: 12,
                        price: 30.4
                    }
                })

                const newSpawnSkill = await prisma.spawnSkill.create({
                    data: {
                        skill1: "skill1",
                        skill2: "skill2",
                        skill3: "skill3",
                        spawn_id: newSpawn.id
                    }
                })

                const newSpawnAddress = await prisma.spawnAddress.create({
                    data:{
                        spawn_id: newSpawn.id,
                        metadata: "metadata",
                        imageAtlas: "image Atlas",
                        atlas: "atlas",
                        imageAddress: "image address"
                    }
                })

                const newBattleInfo = await prisma.battleInfo.create({
                    data: {
                        spawn_id: newSpawn.id,
                        level: 12,
                        battles_won: 12,
                        battles_lost: 23
                    }  
                })

                const newSpawnSparts = await prisma.spawnParts.create({
                    data: {
                        id: newSpawn.id,
                        name: "leg",
                        imageAddress: "image address",
                        class: "ave",
                        level: 2
                    }
                })

                
                newSpawn["battleInfo"] = newBattleInfo
                newSpawn["spawnSkills"] = newSpawnSkill
                newSpawn["spawnAddress"] = newSpawnAddress
                newSpawn["spawnParts"] = newSpawnSparts
                newSpawn["parents"] = []
                newSpawn["children"] = []




                console.log(newSpawn)
                return newSpawn
            }
        }
    }

module.exports = resolvers