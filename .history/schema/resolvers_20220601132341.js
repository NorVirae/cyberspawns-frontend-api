const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const resolvers =  {
        Query: {
            hello: () =>{
                return "James"
            }
        },

        Mutation: {
            createSpawn: async () => {
                await prisma.spawn.create({
                    data: {
                        owner_id: 
                    }
                })
            }
        }
    }

module.exports = resolvers