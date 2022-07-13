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
           fetchOffersAuction: async () => {

           },

           fetchUserSpawns: async (parents, args, context) => {

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
                        skills: [args.skill1, args.skill2, args.skill3],
                        spawn_id: newSpawn.id
                    }
                })

                const newSpawnAddress = await prisma.spawnAddress.create({
                    data:{
                        spawn_id: newSpawn.id,
                        metadata: args.metadata,
                        imageAtlas: args.imageAtlas,
                        atlas: args.atlas,
                        imageAddress: args.imageAddress
                    }
                })

                const newBattleInfo = await prisma.battleInfo.create({
                    data: {
                        spawn_id: newSpawn.id,
                        level: args.level,
                        battles_won: args.battlesWon,
                        battles_lost: args.battlesLost
                    }
                })

                const newSpawnSparts = await prisma.spawnParts.create({
                    data: {
                        id: newSpawn.id,
                        name: args.partName,
                        imageAddress: args.partImageAddress,
                        class: args.partClass,
                        level: args.partLevel
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