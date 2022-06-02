const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const resolvers =  {
        Query: {
           fetchSpawn: async () => {
               return {name: "hello"}
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
                    spawn_id: newSpawn.id,
                    level: 12,
                    battles_won: 12,
                    battles_lost: 23
                })

                const newSpawn

                console.log(newSpawn)
                return newSpawn
            }
        }
    }

module.exports = resolvers