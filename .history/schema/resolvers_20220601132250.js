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
                await prisma.user.create({
                    data: {
                        id: {type: } 
                    }
                })
            }
        }
    }

module.exports = resolvers