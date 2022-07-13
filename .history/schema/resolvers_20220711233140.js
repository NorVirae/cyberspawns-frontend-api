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
                        chain: args.chain
                class: args.class
                createdAt: args.createdAt
                updatedAt: args.updatedAt
                is_on_sale: false
                market_type: "none"
                token_id: args.token_id
                usdt_price: args.usdt_price
                metadata_uri: String
                start_time: Int
                end_time: Int
                owner_address: String
                origin_owner_address: String
                    }
                })

    
                return newSpawn
            }
        }
    }

module.exports = resolvers