const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const resolvers =  {
        Query: {
           fetchSpawn: async (parents, args, contex) => {
                const theSpawn = await prisma.spawn.findUnique({
                    where: {
                        token_id: args.token_id
                    }
                })
                console.log(theSpawn, "THE SPAWN!")
                return theSpawn
           },

           fetchMarketPlaceSpawns: async () => {
                const listOfSpawns = await prisma.spawn.findMany()
                console.log(listOfSpawns)
                return listOfSpawns
           },
           
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

    
                return newSpawn
            }
        }
    }

module.exports = resolvers