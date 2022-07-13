const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const resolvers =  {
        Query: {
           fetchSpawn: async (parents, args, context) => {
            try {
                const theSpawn = await prisma.spawn.findUnique{
                    where: {
                        token_id: args.token_id
                    }
                })
                console.log(theSpawn, "THE SPAWN!")
                return theSpawn
            }catch(err){
                console.log(err)
            }
                
           },

           fetchMarketPlaceSpawns: async (parents, args, context) => {
                const listOfSpawns = await prisma.spawn.findMany()
                console.log(listOfSpawns)
                return listOfSpawns
           },
           
        },

        Mutation: {
            createSpawn: async (parents, args, context) => {

                const newSpawn = await prisma.spawn.create({
                    data: {
                        chain: args.chain,
                        class: args.class,
                        createdAt: args.createdAt,
                        updatedAt: args.updatedAt,
                        is_on_sale: false,
                        market_type: "none",
                        token_id: 0,
                        usdt_price: 0,
                        metadata_uri: 0,
                        start_time: 0,
                        end_time: 0,
                        owner_address: args.owner_address,
                        origin_owner_address: args.owner_address
                    }
                })

    
                return newSpawn
            }
        }
    }

module.exports = resolvers