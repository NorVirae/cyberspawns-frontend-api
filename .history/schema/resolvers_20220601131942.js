const {PrismaClient} = require('@prisma/client')


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