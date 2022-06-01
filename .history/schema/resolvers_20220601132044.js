const {PrismaClient} = require('@prisma/client')

const prisma
const resolvers =  {
        Query: {
            hello: () =>{
                return "James"
            }
        },

        Mutation: {
            createSpawn: () => {

            }
        }
    }

module.exports = resolvers