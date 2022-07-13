const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const resolvers =  {
        Query: {
           fetchSpawn: async (parents, args, context) => {
            try {
                const theSpawn = await prisma.spawn.findUnique({
                    where: {
                        token_id: args.token_id
                    }
                })
                if (!theSpawn){
                    return {err: "Spawn not found or does not exist"}
                }
                console.log(theSpawn, "THE SPAWN!")
                return {...theSpawn, success: true}
            }catch(err){
                console.log(err)
                return {err: err.message}
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
                try{
                    const newSpawn = await prisma.spawn.create({
                        data: {
                            chain: args.chain,
                            token_id: args.token_id,
                            class: args.class,
                            is_on_sale: false,
                            metadata_uri: args.metadata_uri,
                            base_uri: args.base_uri,
                            owner_address: args.owner_address,
                            origin_owner_address: args.owner_address
                        }
                    })
                    return newSpawn
                }catch(err){
                    console.log(err)
                    return {err: err.message}
                }
                
            },

            editSpawn: async (parents, args, context) => {
                try{
                    const updatedSpawn = await prisma.spawn.update({
                        data: args
                    })
                    return updatedSpawn
                }catch(err){
                    console.log(err)
                    return {err: err.message}
                }
        }
    }
} 

module.exports = resolvers