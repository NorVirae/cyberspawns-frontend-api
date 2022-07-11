const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const resolvers =  {
        Query: {
           fetchSpawn: async (parents, args, contex) => {
                return {name: "hello"}
           },
           fetchMarketPlaceSpawns: async () => {
                const listOfSpawns = await prisma.spawn.findMany()
                console.log(listOfSpawns)
                return listOfSpawns
           },
           fetchDashboardRecentlyListed: async () => {

           },

           fetchDashboardRecentlySold: async () => {
               
            }
        },

        Mutation: {
            createSpawn: async (parents, args, context) => {

                const newSpawn = await prisma.spawn.create({
                    data: {
                        owner_id: args.ownerId, //"9f7f12de-850b-4f83-94f2-2f350ff77b01",
                        chain: args.chain,
                        class: args.class,
                        name: args.name,
                        breed_count: args.breedCount,
                        figures: args.figures,
                        token_id: args.tokenId,
                        price: args.price
                    }
                })

                const newSpawnSkill = await prisma.spawnSkill.create({
                    data: {
                        skills: [args.skill1, args.skill2],
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